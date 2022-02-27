import { LightningElement } from 'lwc';

export default class EmialValidatorComponent extends LightningElement {

    capturedEmail='';

    captureData(event) {
        let emailId = event.target.value;
        let email = this.template.querySelector('[data-id="email"]');
        email.setCustomValidity("");
        if(this.validateEmail(emailId)) {
            this.capturedEmail = emailId;
        } else {
            email.setCustomValidity("Please Enter Email ID in format abc@def.com");
        }
        email.reportValidity();
    }

    validateEmail(emailVal) {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailVal.match(emailRegex)) {
            return true;
        }
        return false;
    }
}