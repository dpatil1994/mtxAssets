import { LightningElement } from 'lwc';

export default class AssetTestComponent extends LightningElement {

    capturedMobileNumber;

    fetchMobileNumber(event) {
        let phoneNumber = this.formatPhoneNumber(event, event.target.value);
        this.capturedMobileNumber = phoneNumber;
        console.log('phoneNumber -->', phoneNumber);
    }

    formatPhoneNumber(event, number) {
        let keyCode = event.which;
        if ((keyCode < 48 || keyCode > 57)) {
            event.preventDefault();
            return number;
        } else if (number && number.length > 13) {
            event.preventDefault();
            return number;
        }
        return this.autoFormatNumber(number);
    }

    autoFormatNumber(number) {
        number = number.replace(/[^\d]/g, '');
        if (number.length === 1) {
            number = number.replace(/(\d{1})/, "($1)");
        } else if (number.length === 2) {
            number = number.replace(/(\d{2})/, "($1)");
        } else if (number.length === 3) {
            number = number.replace(/(\d{3})/, "($1)");
        } else if (number.length === 4) {
            number = number.replace(/(\d{3})(\d{1})/, "($1) $2");
        } else if (number.length === 5) {
            number = number.replace(/(\d{3})(\d{2})/, "($1)$2");
        } else if (number.length === 6) {
            number = number.replace(/(\d{3})(\d{3})/, "($1)$2");
        } else if (number.length === 7) {
            number = number.replace(/(\d{3})(\d{3})(\d{1})/, "($1) $2-$3");
        } else if (number.length === 8) {
            number = number.replace(/(\d{3})(\d{3})(\d{2})/, "($1) $2-$3");
        } else if (number.length === 9) {
            number = number.replace(/(\d{3})(\d{3})(\d{3})/, "($1) $2-$3");
        } else if (number.length === 10) {
            number = number.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
        }
        return number;
    }
    
}