import { LightningElement } from 'lwc';
import { getData } from 'utils/fetchUtils';

export default class Registration extends LightningElement {
    leadId;
    email;
    thEmail;
    popupEmail;
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
    showPopup = false;
    attendeeId;

    connectedCallback(){
        this.attendeeId = localStorage.getItem("attendeeId_22");
        const attendeeName = localStorage.getItem("attendeeName_22");
        const thEmailCaptured = localStorage.getItem("thEmailCaptured_22");
        if(this.attendeeId && attendeeName){
            this.attendeeName = attendeeName;
            this.showContent = true;
            if(!thEmailCaptured){
                this.showPopup = true;
            }

        }
    }

    handleEmailChange(event) {
        this.email = event.target.value;
    }

    handleNameChange(event) {
        this.name = event.target.value;
    }
    handleThEmailChange(event) {
        this.thEmail = event.target.value;
    }
    handlePopupEmailChange(event){
        this.thEmail = event.target.value;
    }


    handleRegister() {
        let isvalid = true;
        this.error = '';
        const textboxElement =
            this.template.querySelectorAll('lightning-input')[1];
        if (!textboxElement.checkValidity()) {
            textboxElement.reportValidity();
            isvalid = false;
        }
        const emailElement =
            this.template.querySelectorAll('lightning-input')[2];
        if (!emailElement.checkValidity()) {
            emailElement.reportValidity();
            isvalid = false;
        }

        const themailElement = 
            this.template.querySelectorAll('lightning-input')[3];
        if (!emailElement.checkValidity()) {
            themailElement.reportValidity();
            isvalid = false;
        }

        if (isvalid && this.name && this.email && this.thEmail) {
            this.showSpinner = true;
            getData('/api/register', {
                name: this.name,
                email: this.email,
                thEmail: this.thEmail
            })
                .then((result) => {
                    this.leadId = result;
                    this.showForm = false;
                    this.showContent = true;
                    localStorage.setItem("attendeeId_22", this.leadId);
                    localStorage.setItem("attendeeName_22", this.name);
                    localStorage.setItem("thEmailCaptured_22", true);

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
    handleSubmit(){
        let isvalid = true;
        this.error = '';
        const textboxElement =
            this.template.querySelectorAll('lightning-input')[0];
        if (!textboxElement.checkValidity()) {
            textboxElement.reportValidity();
            isvalid = false;
        }
            if (isvalid && this.attendeeId && this.thEmail) {
                this.showSpinner = true;
                getData('/api/updateThEmail', {
                    attendeeId: this.attendeeId,
                    thEmail: this.thEmail
                })
                    .then(() => {
                        this.showPopup = false;
                       localStorage.setItem("thEmailCaptured_22", true);
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
