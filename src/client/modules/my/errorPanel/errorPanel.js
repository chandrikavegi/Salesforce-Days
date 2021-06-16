import { LightningElement, api } from 'lwc';
import { reduceErrors } from './reduceErrors.js';

export default class ErrorPanel extends LightningElement {
    /** Single or array of LDS errors */
    @api errors;

    get errorMessages() {
        return reduceErrors(this.errors);
    }
}
