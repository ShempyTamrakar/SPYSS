import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  password_check_re_check,
  password_length,
} from "../../../helper/helper.validation";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {

  personalDetails!: FormGroup;
  basicDetails!: FormGroup;
  contactDetails!: FormGroup;
  campDetails!: FormGroup;
  otherDetails!: FormGroup;
  personal_step = false;
  basic_details = false;
  contact_step = false;
  camp_step = false;
  other_step = false;
  step:any = 1;
  yesSection: boolean;
  isShown: boolean;
  blank_box;
  isShownTrue : boolean;
  cityDrop: boolean;
  constructor(private formBuilder: FormBuilder) {
    this._initializeRegistrationStepOne();
    this._initializeRegistrationStepTwo();
    this._initializeRegistrationStepThree();
    this._initializeRegistrationStepFor();
    this._initializeRegistrationStepFive();
  }

  ngOnInit() {}

  get personal() {
    return this.personalDetails.controls;
  }
  get basic() {
    return this.basicDetails.controls;
  }
  get contact() {
    return this.contactDetails.controls;
  }
  get camp() {
    return this.campDetails.controls;
  }
  get other() {
    return this.otherDetails.controls;
  }

  next() {
    if (this.step == 1) {
      this.personal_step = true;
      if (this.personalDetails.invalid) {
        return;
      }
    
     this.step++;
    }
  }
  nextTwo() {
   
    if (this.step ==  2) {
   
      this.basic_details = true;
      if (this.basicDetails.invalid) {
        return;
      }
    
      this.step++;
   
    }
  }
  nextThree() {
    if (this.step == 3) {
      this.contact_step = true;
      if (this.contactDetails.invalid) {
        return;
      }
      this.step++;
    }
  }
  nextFour() {
    if (this.step == 4) {
      this.other_step = true;
      if (this.otherDetails.invalid) {
        return;
      }
      this.step++;
    }
  }

  previous() {
    this.step--;
    if (this.step == 1) {
      this.personal_step = false;
    }
  }

  yes() {
    if ((this.isShown = true)) {
      this.blank_box = "";
      this.basicDetails.get('primary').setValidators([Validators.required]);
      return;
    }
  }
  no() {
    if (this.isShown=false) {
      this.basicDetails.get('primary').clearValidators();
     return 
    }
  }

 


  selectItem() {
    this.cityDrop = true;
  }

  yesCamp() {
    if ((this.isShownTrue = true)) {
      return;
    }
  }
  noCamp() {
    if ((this.isShownTrue =false)) {
    }
  }

  submit() {
    if (this.step == 5) {
      this.camp_step = true;
      if (this.campDetails.invalid) {
        return;
      }
    }
  }

  private _initializeRegistrationStepOne() {
    this.personalDetails = this.formBuilder.group({
      f_name: ["", Validators.required],
      middle_name: ["", Validators.required],
      l_name: ["", Validators.required],
      subject: ["", Validators.required],
      date: [null, Validators.required],
    });
  }
  private _initializeRegistrationStepTwo() {
    this.basicDetails = this.formBuilder.group(
      {
        email: ["", [Validators.required, Validators.email]],
        password: ["", Validators.required],
        comfirm_password: ["", Validators.required],
        language: ["", Validators.required],
        qualification: ["", Validators.required],
        emp_type: ["", Validators.required],
        primary: [""],
      },
      { validators: [password_check_re_check(), password_length()] }
    );
  }
  private _initializeRegistrationStepThree() {
    this.contactDetails = this.formBuilder.group({
      number: [null, Validators.required],
      whatsapp: [null, Validators.required],
      country: ["", Validators.required],
      state: ["", Validators.required],
      valaya: ["", Validators.required],
      district: ["", Validators.required],
      address: ["", Validators.required],
      pincode: ["", Validators.required],
    });
  }

  private _initializeRegistrationStepFor() {
    this.otherDetails = this.formBuilder.group({
      highest_qualification: ["", Validators.required],
      emp_type: ["", Validators.required],
      wing: ["", Validators.required],
      country: ["", Validators.required],
    });
  }

  private _initializeRegistrationStepFive() {
    this.campDetails = this.formBuilder.group({
      batch: ["", Validators.required],
      trainer_text: ["", Validators.required],
      role_name: ["", Validators.required],
      commit_name: ["", Validators.required],
      camp_complite: ["", Validators.required],
      batch_type: ["", Validators.required],
      prasent_res : ["", Validators.required],
    });
  }
}
