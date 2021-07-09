import { LightningElement, track } from 'lwc';

export default class AllWeeks extends LightningElement {
    @track day1Content = {
        tmUrl:
            'https://trailhead.salesforce.com/users/journeytosalesforce/trailmixes/salesforce-days-data-modeling',
        contentLinks: [
            {
                title: "Quick Start - Data Modeling",
                url:
                    'https://www.youtube.com/watch?v=HwynYpstnOM&list=PLgIMQe2PKPSK1ZL2mUjPv3gSrst9EmEBB&index=2',
                type:
                    '/resources/icons/utility-sprite/svg/symbols.svg#video'
            },
            {
                title: 'Build a Data Model for a Recruiting App',
                url:
                    'https://trailhead.salesforce.com/content/learn/projects/build-a-data-model-for-a-recruiting-app',
                type:
                    '/resources/icons/utility-sprite/svg/symbols.svg#trailhead'
            },
        ]
    };

    @track day2Content = {
        tmUrl:
            'https://trailhead.salesforce.com/users/journeytosalesforce/trailmixes/salesforce-days-customize-user-experience-with-clicks',
        contentLinks: [
            {
                title: 'Customize User Experience with Clicks',
                url:
                    'https://www.youtube.com/watch?v=gdJZXsZu8Q4&list=PLgIMQe2PKPSK1ZL2mUjPv3gSrst9EmEBB',
                type: '/resources/icons/utility-sprite/svg/symbols.svg#video'
            },
            {
                title: 'Customize the User Interface for a Recruiting App',
                url:
                    'https://trailhead.salesforce.com/en/content/learn/projects/customize-the-ui-for-a-recruiting-app?trail_id=build-platform-apps-in-lightning-experience',
                type:
                    '/resources/icons/utility-sprite/svg/symbols.svg#trailhead'
            }
        ]
    };

    @track day3Content = {
        tmUrl:
            'https://trailhead.salesforce.com/users/journeytosalesforce/trailmixes/salesforce-days-automation-with-clicks',
        contentLinks: [
            {
                title: 'Quick Start - Automation with Clicks',
                url:
                    'https://www.youtube.com/watch?v=-Lc_5XzYkXw&list=PLgIMQe2PKPSK1ZL2mUjPv3gSrst9EmEBB',
                type:
                    '/resources/icons/utility-sprite/svg/symbols.svg#video'
            },
            {
                title: 'Automate Business Processes for a Recruiting App',
                url:
                    'https://trailhead.salesforce.com/en/content/learn/projects/automate-business-processes-recruiting-app',
                type:
                    '/resources/icons/utility-sprite/svg/symbols.svg#trailhead'
            },
            {
                title: 'Improve Data Quality for the App',
                url: 'https://trailhead.salesforce.com/en/content/learn/projects/improve-data-quality-for-a-recruiting-app',
                type: '/resources/icons/utility-sprite/svg/symbols.svg#trailhead'
            },
            {
                title: 'Salesforce Flow',
                url: 'https://trailhead.salesforce.com/en/content/learn/modules/business_process_automation',
                type: '/resources/icons/utility-sprite/svg/symbols.svg#trailhead'
            }
        ]
    };

    @track day4Content = {
        tmUrl:
            'https://trailhead.salesforce.com/users/journeytosalesforce/trailmixes/salesforce-days-lightning-web-components-and-apex',
        contentLinks: [
            {
                title: 'Apex and Lightning Web Components',
                url: 'https://www.youtube.com/watch?v=4_hTUXv73jo&list=PLgIMQe2PKPSK1ZL2mUjPv3gSrst9EmEBB',
                type: '/resources/icons/utility-sprite/svg/symbols.svg#video'
            },
            {
                title: 'Quick Start: Apex Coding for Admins',
                url: 'https://trailhead.salesforce.com/en/content/learn/projects/quick-start-apex-coding-for-admins',
                type: '/resources/icons/utility-sprite/svg/symbols.svg#trailhead'
            },
            {
                title: 'Quick Start: Lightning Web Components',
                url: 'https://trailhead.salesforce.com/en/content/learn/projects/quick-start-lightning-web-components',
                type: '/resources/icons/utility-sprite/svg/symbols.svg#trailhead'
            }

        ]
    };

    @track day5Content = {
        tmUrl:
            'https://trailhead.salesforce.com/en/users/journeytosalesforce/trailmixes/salesforce-days-security',
        contentLinks: [
            {
                title: 'Security in Salesforce',
                url: 'https://www.youtube.com/watch?v=wxy_x1FL9VE&list=PLgIMQe2PKPSK1ZL2mUjPv3gSrst9EmEBB&index=6',
                type: '/resources/icons/utility-sprite/svg/symbols.svg#video'
            },
            {
                title: 'Keep Data Secure in a Recruiting App',
                url:
                    'https://trailhead.salesforce.com/en/content/learn/projects/keep-data-secure-in-a-recruiting-app?trail_id=build-platform-apps-in-lightning-experience',
                type:
                    '/resources/icons/utility-sprite/svg/symbols.svg#trailhead'
            },
        ]
    };
}
