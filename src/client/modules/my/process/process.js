import { LightningElement } from 'lwc';

export default class Process extends LightningElement {
    handleBeginner(e) {
        this.clear();
        e.currentTarget.classList.add('active');
        const event = new CustomEvent('showcontent', {
            detail: { showBeginner: true, showAdvanced: false }
        });
        this.dispatchEvent(event);
    }

    handleAdvanced(e) {
        this.clear();
        e.currentTarget.classList.add('active');
        const event = new CustomEvent('showcontent', {
            detail: { showBeginner: false, showAdvanced: true }
        });
        this.dispatchEvent(event);
    }

    clear() {
        this.template.querySelectorAll('.tile').forEach((e) => {
            e.classList.remove('active');
        });
    }
}
