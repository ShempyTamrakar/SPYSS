import {FormGroup} from '@angular/forms';

export function password_check_re_check() 
{
    return function (userReg : FormGroup) 
    {
        let pass = userReg.controls.password;
        let re_pass = userReg.controls.comfirm_password;

        if(re_pass.errors && ! re_pass.errors.passErr)
        {
            return;
        }

        if(pass.value != re_pass.value)
        {
            re_pass.setErrors({passErr : true});
        }
        else
        {
            re_pass.setErrors(null);
        }
    }
}

export function password_length() 
{
    return function (userReg : FormGroup) 
    {
        let passwordLen = userReg.controls.password;

        if(passwordLen.errors && ! passwordLen.errors.passLenght)
        {
            return;
        }

        if(passwordLen.value.length < 6)
        {
            passwordLen.setErrors ({passLenght : true});
        }
        else
        {
            passwordLen.setErrors(null);
        }
    }
}