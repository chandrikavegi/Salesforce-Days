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
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrcElem: ["'self'", "'unsafe-inline'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            frameSrc: ["'self'", '*.youtube.com'],
            imgSrc: ["'self'", '*.cloudinary.com', '*.ytimg.com']
        }
    })
);
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

const validDomains = [
    'hcl.com',
    '22feettribalww.com',
    '360degreecloud.co.in',
    '360degreecloud.com',
    '360degreecloud.in',
    '360smsapp.com',
    'absyz.com',
    'accenture.com',
    'aethereus.com',
    'aimdek.com',
    'appcino.com',
    'appistoki.com',
    'appistoki.in',
    'appstrail.com',
    'aspiresys.com',
    'assurant.com',
    'atcs.com',
    'atos.net',
    'bigworks.co',
    'birlasoft.com',
    'bluepineapple.io',
    'borngroup.com',
    'brainvire.com',
    'brickredsys.com',
    'capgemini.com',
    'cccinfotech.com',
    'ceptes.com',
    'cequitysolutions.com',
    'cloobees.com',
    'cloudcertitude.com',
    'cloudexpertsindia.com',
    'cloudodyssey.co.uk',
    'cloudroute.in',
    'cloufi.com',
    'codleo.com',
    'cognizant.com',
    'comprotechnologies.com',
    'conclotechnologies.com',
    'coservesolutions.com',
    'credextechnology.com',
    'csaconsultants.in',
    'customercentria.com',
    'cybage.com',
    'cyient.com',
    'cymetrixsoft.com',
    'damcogroup.com',
    'dazeworks.com',
    'dccil.com',
    'deligence.com',
    'deloitte.com',
    'dentsu.com',
    'dextara.com',
    'dgenx.co',
    'digicloudsolns.com',
    'dxc.com',
    'eclerx.com',
    'epeoplebc.com',
    'eternussolutions.com',
    'exavalu.com',
    'excellerconsultancy.in',
    'extentia.com',
    'fexle.com',
    'finessedirect.com',
    'fingertipplus.com',
    'fiserv.com',
    'flexsin.com',
    'forcearkconsulting.com',
    'getoncrm.com',
    'girikon.com',
    'groupm.com',
    'happiestminds.com',
    'horizontal.com',
    'iconresources.com',
    'in.ibm.com',
    'infosys.com',
    'infrabyteits.com',
    'infusai.com',
    'ingrammicro.com',
    'innovacx.com',
    'innovarsspl.com',
    'interactiveavenues.com',
    'isobar.com',
    'jarvisbusiness.io',
    'jeevantechnologies.com',
    'kloudrac.com',
    'kpmg.com',
    'krazy-tech.com',
    'kriosispl.com',
    'kvpcorp.com',
    'lntinfotech.com',
    'logicrain.com',
    'magnet360.com',
    'mannyats.com',
    'manras.com',
    'marlabs.com',
    'maxify.digital',
    'melonleaf.com',
    'merkleinc.com',
    'metaoups.com',
    'metyis.com',
    'mightyhive.com',
    'mind-infotech.com',
    'mindtree.com',
    'mirumagency.com',
    'mphatek.com',
    'mresult.com',
    'nanostuffs.com',
    'newsxsys.com',
    'nivasoft.com',
    'nttdata.com',
    'orbitinnovations.com',
    'orioncoders.com',
    'persistent.com',
    'plus91labs.com',
    'processthreesixty.com',
    'proseraa.com',
    'publicissapient.com',
    'purplstack.com',
    'pwc.com',
    'quadrafort.com',
    'ranosys.com',
    'redington.co.in',
    'rsystems.com',
    'rudhrainfosolutions.com',
    'sapours.com',
    'siratek.in',
    'sislinfotech.com',
    'skinternational.com',
    'socialbeat.in',
    'softsquare.biz',
    'sokrati.com',
    'solveda.com',
    'spectrum7tech.com',
    'stetig.in',
    'suneratech.com',
    'sweven.com',
    'tcs.com',
    'techaim.in',
    'techilaservices.com',
    'techmahindra.com',
    'techmatrixconsulting.com',
    'techshiney.com',
    'teqfocus.com',
    'theretailinsights.com',
    'tractionondemand.com',
    'tranzevo.com',
    'uneecops.com',
    'utilitarianlab.com',
    'valueaddsofttech.com',
    'veneratesolutions.com',
    'verticurl.com',
    'virtuenix.com',
    'virtusa.com',
    'vyomlabs.com',
    'warpdrivetech.in',
    'whishworks.com',
    'wipro.com',
    'wundermanthompson.com',
    'xerago.com',
    'yash.com',
    'zensar.com',
    'ibm.com',
    'zoxima.com',
    'sevenx.io',
    'coreflexsolutions.com',
    'satrangtech.com'
];

// Redirect all non /api/ endpoint requests to index.html
app.get(/^(?!\/api).+/, (req, res) => {
    res.sendFile(path.resolve(DIST_DIR + '/index.html'));
});

// Expose API endpoints for Salesforce Integration
app.get('/api/register', function (req, res) {
    const { name, email, thEmail, tshirtSize } = req.query;
    const lCEmail = email.toLowerCase();
    const domain = lCEmail.split('@')[1];
    if (validDomains.includes(domain)) {
        const url = `/leadData/register?name=${encodeURIComponent(
            name
        )}&email=${lCEmail}&thEmail=${thEmail}&tshirtSize=${tshirtSize}`;
        restUtilsObj.doApexGet(url, req, res);
    } else {
        res.statusMessage =
            'Invalid email address: Your organization is not a part of Salesforce Days';
        res.status(400).send();
    }
});

app.get('/api/updateThEmail', function (req, res) {
    const { email, thEmail, tshirtSize } = req.query;
    const lCEmail = email.toLowerCase();
    const domain = lCEmail.split('@')[1];
    if (validDomains.includes(domain)) {
        const url = `/leadData/updateThEmail?email=${encodeURIComponent(
            email
        )}&thEmail=${thEmail}&tshirtSize=${tshirtSize}`;
        restUtilsObj.doApexGet(url, req, res);
    } else {
        res.statusMessage =
            'Invalid email address: Your organization is not a part of Salesforce Days';
        res.status(400).send();
    }
});

app.get('/api/updateHackCompletion', function (req, res) {
    const { email, secret } = req.query;
    if(secret === '300c31639e12c3582ac08bf480498779'){
        const lCEmail = email.toLowerCase();
        const domain = lCEmail.split('@')[1];
        if (validDomains.includes(domain)) {
            const url = `/leadData/updateHackCompletion?email=${encodeURIComponent(
                email
            )}`;
            restUtilsObj.doApexGet(url, req, res);
        } else {
            res.statusMessage =
                'Invalid email address: Your organization is not a part of Salesforce Days';
            res.status(400).send();
        }
    } else {
        res.status(400).send();
    }
});


app.listen(PORT, () =>
    console.log(`✅  API Server started: http://${HOST}:${PORT}`)
);
