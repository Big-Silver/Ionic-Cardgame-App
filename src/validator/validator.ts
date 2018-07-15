import { FormControl } from '@angular/forms';

interface ValidationResult {
    [Key: string]: boolean;
}

export class EmailValidator{
    static mailFormat(control: FormControl): ValidationResult {
          var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])+.[a-z0-9]([a-z0-9-]*[a-z0-9])? *$/i;
            if (control.value != "" &&  !EMAIL_REGEXP.test(control.value)) {
            return { "Please provide a valid email": true };
        }

            return null;
    }
}

export class WebsiteValidator{
    static urlFormat(control: FormControl): ValidationResult {
          var Website_Url = /^[https://http://www.]+[a-z0-9]([a-z0-9-]*[a-z0-9])+.[a-z0-9]([a-z0-9-]*[a-z0-9])? *$/i;
            if (control.value != "" &&  !Website_Url.test(control.value)) {
            return { "Please provide a valid Url": true };
        }

            return null;
    }
}

export class AgeValidator{
    static ageFormat(control: FormControl): ValidationResult {
        let ageNum:any;
        let ageCount:any;
        if(typeof control.value == "string"){
            ageNum = (control.value).replace(/[^0-9]/g,'');
            ageCount = parseInt(ageNum)
        }else{
            ageCount = parseInt(control.value)
        }
        if (ageCount<=17) {
            return { "You must be over 18 to win prizes": true };
        }
        return null;
    }
}

