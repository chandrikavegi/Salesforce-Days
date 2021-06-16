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

    handleEmailChange(event) {
        this.email = event.target.value;
        const emailElement =
            this.template.querySelectorAll('lightning-input')[0];
        emailElement.setCustomValidity('');
        emailElement.reportValidity();
        let emailValue = emailElement.value;
        if (
            emailValue.includes('gmail.com') ||
            emailValue.includes('yahoo.com') ||
            emailValue.includes('outlook.com')
        ) {
            emailElement.setCustomValidity(
                'Please enter your company email address'
            );
            emailElement.reportValidity();
        }
    }
    handleCompanyChange(event) {
        this.company = event.target.value;
    }

    handleOtpChange(event) {
        this.OTP = event.target.value;
    }
    handleThEmailChange(event) {
        this.thEmail = event.target.value;
    }
    handleCheckboxChange(event) {
        this.chkbx = event.target.checked;
    }
    get options() {
        return [
            { label: 'Accenture', value: 'Accenture' },
            { label: 'Capgemini', value: 'Capgemini' },
            { label: 'Cognizant', value: 'Cognizant' },
            { label: 'Deloitte', value: 'Deloitte' },
            { label: 'Dentsu', value: 'Dentsu' },
            { label: 'HCL', value: 'HCL' },
            { label: 'IBM', value: 'IBM' },
            { label: 'Infosys', value: 'Infosys' },
            { label: 'Larsen and Toubro', value: 'Larsen and Toubro' },
            { label: 'Mindtree', value: 'Mindtree' },
            { label: 'Persistent Systems', value: 'Persistent Systems' },
            { label: 'PWC', value: 'PWC' },
            { label: 'TCS', value: 'TCS' },
            { label: 'Tech Mahindra', value: 'Tech Mahindra' },
            { label: 'Wipro / Appirio', value: 'Wipro / Appirio' },
            {
                label: 'WPP / Wunderman Thompson / Group M / Mirum Agency / Verticurl',
                value: 'WPP / Wunderman Thompson / Group M / Mirum Agency / Verticurl'
            }
        ];
    }

    handleSendOtp() {
        let isvalid = true;
        const emailElement =
            this.template.querySelectorAll('lightning-input')[0];
        //let emailValue = emailElement.value;

        if (!emailElement.checkValidity()) {
            emailElement.reportValidity();
            isvalid = false;
        }

        const checkboxElement = this.template.querySelectorAll('input')[0];
        if (!checkboxElement.checkValidity()) {        
            checkboxElement.reportValidity();
            isvalid = false;
        }
        if (isvalid && this.email) {
            this.disableform1 = true;

            getData('/api/register', {
                email: this.email,
                company: this.company,
                thEmail: this.thEmail,
                chkbx: this.chkbx
            })
                .then((result) => {
                    this.leadId = result;
                    this.showForm = false;
                    this.captureOtp = true;
                })
                .catch((error) => {
                    this.error = error;
                });
        }
    }

    handleVerifyOtp() {
        let isvalid = true;
        const otpElement = this.template.querySelectorAll('lightning-input')[0];
        otpElement.setCustomValidity('');
        otpElement.reportValidity();
        if (!otpElement.checkValidity()) {
            otpElement.reportValidity();
            isvalid = false;
        }
        if (isvalid && this.OTP) {
            this.optFieldDisabled = true;

            getData('/api/verifyOTP', { leadId: this.leadId, otp: this.OTP })
                .then((result) => {
                    if (result === true) {
                        localStorage.setItem('Sfdays_leadId', this.leadId);
                        //const otpDiv = this.template.querySelector('#otpDiv');
                        //otpDiv.scrollIntoView();
                        this.showContent = true;
                        this.showForm = false;
                        this.captureOtp = false;
                    } else {
                        this.optFieldDisabled = false;
                        otpElement.setCustomValidity(
                            'The OTP you entered is invalid.'
                        );
                        otpElement.reportValidity();
                    }
                })
                .catch((error) => {
                    this.error = error;
                    this.optFieldDisabled = false;
                });
        }
    }
    renderedCallback() {
        let leadId = localStorage.getItem('Sfdays_leadId');
        if (leadId != null) {
            this.showContent = true;
            this.showForm = false;
        }
    }
}
