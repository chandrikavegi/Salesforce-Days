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
            'https://trailhead.salesforce.com/users/shashforce/trailmixes/level-up-sf-dev-code-samples?utm_source=week-button&utm_medium=heroku-app',
        contentLinks: [
            {
                title: 'Watch Live webinar about Sample Apps',
                url:
                    'https://developer.salesforce.com/event/salesforce-developers-reference-code-sample-apps-gallery?utm_source=levelupsfdev&utm_medium=heroku-app',
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
            'https://trailhead.salesforce.com/users/shashforce/trailmixes/level-up-sf-dev-apex-enhancements?utm_source=week-button&utm_medium=heroku-app',
        contentLinks: [
            {
                title: 'Intro to Apex Finalizers',
                url:
                    'https://developer.salesforce.com/blogs/2020/01/learn-moar-in-spring-20-introducing-transaction-finalizers.html?utm_source=levelupsfdev&utm_medium=heroku-app',
                type:
                    '/resources/icons/utility-sprite/svg/symbols.svg#description'
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
            'https://trailhead.salesforce.com/users/shashforce/trailmixes/level-up-sf-dev-low-code-development?utm_source=week-button&utm_medium=heroku-app',
        contentLinks: [
            {
                title: 'Build with Low Code',
                url: 'https://www.youtube.com/watch?v=NE2hcz3PiMc',
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
            'https://trailhead.salesforce.com/en/users/shashforce/trailmixes/level-up-sf-dev-accessibility?utm_source=week-button&utm_medium=heroku-app',
        contentLinks: [
            {
                title: 'Driving equality through Accessibility',
                url: 'https://www.youtube.com/watch?v=-P4enhWB-Y8',
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
