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

    handleEmailChange(event) {
        this.email = event.target.value;
        const emailElement =
            this.template.querySelectorAll('lightning-input')[1];
        emailElement.setCustomValidity('');
        emailElement.reportValidity();
    }
    handleNameChange(event) {
        this.name = event.target.value;
    }

    handleRegister() {
        let isvalid = true;
        this.error ='';
        const emailElement =
            this.template.querySelectorAll('lightning-input')[1];
        //let emailValue = emailElement.value;
        console.log('handle register');
        if (!emailElement.checkValidity()) {
            emailElement.reportValidity();
            isvalid = false;
        }

        const checkboxElement = this.template.querySelectorAll('lightning-input')[0];
        if (!checkboxElement.checkValidity()) {
            checkboxElement.reportValidity();
            isvalid = false;
        }
        if (
            isvalid &&
            this.name &&
            this.email
        ) {

            getData('/api/register', {
                name: this.name,
                email: this.email,
            })
                .then((result) => {
                    this.leadId = result;
                    this.showForm = false;
                    this.showContent = true;
                })
                .catch((error) => {
                    console.log(error);
                    this.error = error;
                });
        }
    }

    
}
