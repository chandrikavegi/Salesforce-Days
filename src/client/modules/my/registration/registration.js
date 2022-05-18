import { LightningElement } from 'lwc';
import { getData } from 'utils/fetchUtils';

export default class Registration extends LightningElement {
    leadId;
    email;
    thEmail;
    company;
    error;
    captureOtp;
    OTP;
    disableform1;
    showContent;
    optFieldDisabled;
    showForm = true;
    chkbx;
    name;
    technology;
    showTabTwo = true;

    showSpinner = false;
    attendeeName;

    connectedCallback(){
        const attendeeId = localStorage.getItem("attendeeId_22");
        const attendeeName = localStorage.getItem("attendeeName_22");
        if(attendeeId && attendeeName){
            this.attendeeName = attendeeName;
            this.showContent = true;
        }
    }

    handleEmailChange(event) {
        this.email = event.target.value;
    }

    handleNameChange(event) {
        this.name = event.target.value;
    }

    handleRegister() {
        let isvalid = true;
        this.error = '';
        const emailElement =
            this.template.querySelectorAll('lightning-input')[1];
        if (!emailElement.checkValidity()) {
            emailElement.reportValidity();
            isvalid = false;
        }

        const checkboxElement =
            this.template.querySelectorAll('lightning-input')[0];
        if (!checkboxElement.checkValidity()) {
            checkboxElement.reportValidity();
            isvalid = false;
        }
        if (isvalid && this.name && this.email) {
            this.showSpinner = true;
            getData('/api/register', {
                name: this.name,
                email: this.email
            })
                .then((result) => {
                    this.leadId = result;
                    this.showForm = false;
                    this.showContent = true;
                    localStorage.setItem("attendeeId_22", this.leadId);
                    localStorage.setItem("attendeeName_22", this.name);
                    this.attendeeName = this.name;
                })
                .catch((error) => {
                    console.log(error);
                    this.error = error;
                })
                .finally(() => {
                    this.showSpinner = false;
                });
        }
    }
}
