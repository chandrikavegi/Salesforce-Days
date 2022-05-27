import { LightningElement, track } from 'lwc';

export default class AllWeeks extends LightningElement {
    @track day1Content = {
        tmUrl: 'https://www.youtube.com/embed/HwynYpstnOM',
        contentLinks: [
            {
                title: 'Build a Data Model for a Recruiting App',
                url: 'https://trailhead.salesforce.com/content/learn/projects/build-a-data-model-for-a-recruiting-app',
                type: '/resources/icons/utility-sprite/svg/symbols.svg#trailhead'
            }
        ]
    };

    @track day2Content = {
        tmUrl: 'https://www.youtube.com/embed/gdJZXsZu8Q4',
        contentLinks: [
            {
                title: 'Customize the User Interface for a Recruiting App',
                url: 'https://trailhead.salesforce.com/en/content/learn/projects/customize-the-ui-for-a-recruiting-app?trail_id=build-platform-apps-in-lightning-experience',
                type: '/resources/icons/utility-sprite/svg/symbols.svg#trailhead'
            }
        ]
    };

    @track day3Content = {
        tmUrl: 'https://www.youtube.com/embed/-Lc_5XzYkXw',
        contentLinks: [
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
        tmUrl: 'https://www.youtube.com/embed/4_hTUXv73jo',
        contentLinks: [
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
        tmUrl: 'https://www.youtube.com/embed/wxy_x1FL9VE',
        contentLinks: [
            {
                title: 'Keep Data Secure in a Recruiting App',
                url: 'https://trailhead.salesforce.com/en/content/learn/projects/keep-data-secure-in-a-recruiting-app?trail_id=build-platform-apps-in-lightning-experience',
                type: '/resources/icons/utility-sprite/svg/symbols.svg#trailhead'
            }
        ]
    };
}
