// Simple Express server setup to serve for local testing/dev API server
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const jwt = require('salesforce-jwt-bearer-token-flow');
const jsforce = require('jsforce');
const bodyParser = require('body-parser');
const RestUtils = require('./restUtils.js');
const path = require('path');

require('dotenv').config();

const app = express();
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrcElem: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        frameSrc: ["'self'", 'youtube.com'],
        imgSrc: ["'self'", '*.cloudinary.com']
    }
}));
app.use(compression());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3002;

const DIST_DIR = './dist';

app.use(express.static(DIST_DIR));

let conn;
let restUtilsObj;

// Read Environment Variables
const { SF_CONSUMER_KEY, SF_USERNAME, SF_LOGIN_URL } = process.env;
let PRIVATE_KEY = process.env.PRIVATE_KEY;
if (!PRIVATE_KEY) {
    PRIVATE_KEY = require('fs').readFileSync('private.pem').toString('utf8');
}

let SF_NAMESPACE = process.env.SF_NAMESPACE;
if (!SF_NAMESPACE) {
    SF_NAMESPACE = '';
}

if (!(SF_CONSUMER_KEY && SF_USERNAME && SF_LOGIN_URL && PRIVATE_KEY)) {
    console.error(
        'Cannot start app: missing mandatory configuration. Check your environment variables'
    );
    process.exit(-1);
}
// Authenticate to Salesforce using JWT Flow
jwt.getToken(
    {
        iss: SF_CONSUMER_KEY,
        sub: SF_USERNAME,
        aud: SF_LOGIN_URL,
        privateKey: PRIVATE_KEY
    },
    (err, tokenResponse) => {
        if (tokenResponse) {
            conn = new jsforce.Connection({
                instanceUrl: tokenResponse.instance_url,
                accessToken: tokenResponse.access_token
            });

            restUtilsObj = new RestUtils(conn);
        } else if (err) {
            console.error(err);
            process.exit(-1);
        }
    }
);

// Redirect all non /api/ endpoint requests to index.html
app.get(/^(?!\/api).+/, (req, res) => {
    res.sendFile(path.resolve(DIST_DIR + '/index.html'));
});

// Expose API endpoints for Salesforce Integration
app.get('/api/register', function (req, res) {
    const { name, email, thEmail, tshirtSize } = req.query;
    const validDomains = [
        'ibm.com',
        'accenture.com',
        'pwc.com',
        'techmahindra.com',
        'capgemini.com',
        'cognizant.com',
        'wipro.com',
        'hcl.com',
        'tcs.com',
        'deloitte.com',
        'mindtree.com',
        'persistent.com',
        'infosys.com',
        'teqfocus.com'
    ];
    const domain = email.split('@')[1];
    if (validDomains.includes(domain)) {
        const url = `/leadData/register?name=${encodeURIComponent(
            name
        )}&email=${email}&thEmail=${thEmail}&tshirtSize=${tshirtSize}`;
        restUtilsObj.doApexGet(url, req, res);
    } else {
        res.statusMessage =
            'Invalid email address: Your organization is not a part of Salesforce Days';
        res.status(400).send();
    }
});
app.get('/api/updateThEmail', function (req, res) {
    const { attendeeId, thEmail, tshirtSize } = req.query;
    const url = `/leadData/updateThEmail?attendeeId=${encodeURIComponent(
        attendeeId
    )}&thEmail=${thEmail}&tshirtSize=${tshirtSize}`;
    restUtilsObj.doApexGet(url, req, res);
});

app.listen(PORT, () =>
    console.log(`✅  API Server started: http://${HOST}:${PORT}`)
);
