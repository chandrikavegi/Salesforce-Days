import { LightningElement } from 'lwc';

export default class Process extends LightningElement {
    handleBeginner() {
        const event = new CustomEvent('showcontent', {
            detail: { showBeginner: true, showAdvanced: false }
        });
        this.dispatchEvent(event);
    }
    handleAdvanced() {
        const event = new CustomEvent('showcontent', {
            detail: { showBeginner: false, showAdvanced: true }
        });
        this.dispatchEvent(event);
    }
}
