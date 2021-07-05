import { LightningElement, api } from 'lwc';

export default class Week extends LightningElement {
    @api showLock;
    @api showLeaderboard;
    @api dayNumber;
    @api theme;
    @api leaderboardNames;
    @api dayString;
    @api quizTime;
    @api content;
    @api reward;
    @api isLaunch;
    @api calendarLink;
    @api showFinale;
    @api showHallOfFame;

    get tmlink() {
        return this.content.tmlink;
    }

    get firstPlace() {
        return this.leaderboardNames.split(',')[0];
    }

    get secondPlace() {
        return this.leaderboardNames.split(',')[1];
    }

    get thirdPlace() {
        return this.leaderboardNames.split(',')[2];
    }

    get fourthPlace() {
        return this.leaderboardNames.split(',')[3];
    }

    get fifthPlace() {
        return this.leaderboardNames.split(',')[4];
    }
}
