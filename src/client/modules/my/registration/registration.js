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
    tshirtSize;
    showBeginnerContent;
    showAdvancedContent;

    connectedCallback() {
        this.attendeeId = localStorage.getItem('attendeeId_22');
        const attendeeName = localStorage.getItem('attendeeName_22');
        const thEmailCaptured = localStorage.getItem('thEmailCaptured_22');
        if (this.attendeeId && attendeeName) {
            this.attendeeName = attendeeName;
            this.showContent = true;
            if (!thEmailCaptured) {
                this.showPopup = true;
            }
        }
    }
    handleContent(event){
        console.log('entered listener');
        this.showBeginnerContent = event.detail.showBeginner;
        this.showAdvancedContent = event.detail.showAdvanced;
        console.log(event.detail.showBeginner,event.detail.showAdvanced)
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

    handleSizeChange(event) {
        this.tshirtSize = event.target.value;
    }

    handlePopupEmailChange(event) {
        this.thEmail = event.target.value;
    }

    get options() {
        return [
            { label: 'Small', value: 'Small' },
            { label: 'Medium', value: 'Medium' },
            { label: 'Large', value: 'Large' },
            { label: 'X-large', value: 'X-large' },
            { label: 'XX-large', value: 'XX-large' }
        ];
    }

    handleRegister() {
        let isvalid = true;
        this.error = '';
        const textboxElement = this.template.querySelector('.name1');
        if (!textboxElement.checkValidity()) {
            textboxElement.reportValidity();
            isvalid = false;
        }
        const emailElement = this.template.querySelector('.email1');
        if (!emailElement.checkValidity()) {
            emailElement.reportValidity();
            isvalid = false;
        }

        const themailElement = this.template.querySelector('.themail1');
        if (!emailElement.checkValidity()) {
            themailElement.reportValidity();
            isvalid = false;
        }
        const tshirtSizeElement = this.template.querySelector('.size1');
        if (!tshirtSizeElement.checkValidity()) {
            tshirtSizeElement.reportValidity();
            isvalid = false;
        }
        if (
            isvalid &&
            this.name &&
            this.email &&
            this.thEmail &&
            this.tshirtSize
        ) {
            this.showSpinner = true;
            getData('/api/register', {
                name: this.name,
                email: this.email,
                thEmail: this.thEmail,
                tshirtSize: this.tshirtSize
            })
                .then((result) => {
                    this.leadId = result;
                    this.showForm = false;
                    this.showContent = true;
                    localStorage.setItem('attendeeId_22', this.leadId);
                    localStorage.setItem('attendeeName_22', this.name);
                    localStorage.setItem('thEmailCaptured_22', true);

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

    handleSubmit() {
        let isvalid = true;
        this.error = '';
        const textboxElement = this.template.querySelector('.themail2');
        if (!textboxElement.checkValidity()) {
            textboxElement.reportValidity();
            isvalid = false;
        }
        const tshirtSizeElement = this.template.querySelector('.size2');
        if (!tshirtSizeElement.checkValidity()) {
            tshirtSizeElement.reportValidity();
            isvalid = false;
        }
        if (isvalid && this.attendeeId && this.thEmail) {
            this.showSpinner = true;
            getData('/api/updateThEmail', {
                attendeeId: this.attendeeId,
                thEmail: this.thEmail,
                tshirtSize: this.tshirtSize
            })
                .then(() => {
                    this.showPopup = false;
                    localStorage.setItem('thEmailCaptured_22', true);
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
