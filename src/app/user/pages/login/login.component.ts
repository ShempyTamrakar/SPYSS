import {
  Component,
  ContentChild,
  Input,
  NgZone,
  OnInit,
  ViewChild,
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  auth_form: FormGroup;
  isSubmit = false;
  otp!: string;

  public login: boolean = false;
  public number: boolean = false;
  // public otp: boolean = false;
  public nri: boolean = false;
  public phoneOTP: boolean = false;
  public buttonName: any = true;
  otpone: string;
  showOtpComponent = true;

  onOtpChange(otp: string) {
    this.otp = otp;
  }
  show = false;
  password;

  constructor(private _fb: FormBuilder) {
    this.auth_form = this._fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      checkbox: ["", Validators.required],
      number: ["", Validators.required],
      phone: ["", Validators.required],
      nri_email: ["", Validators.required],
    });
  }
  ngOnInit() {
    this.password = "password";
  }
  onClick() {
    if (this.password === "password") {
      this.password = "text";
      this.show = true;
    } else {
      this.password = "password";
      this.show = false;
    }
  }
  // otp imput condition start
  public move(e: any, p: any, c: any, n: any) {
    var length = c.value.length;
    var maxlength = c.getAttribute("maxlength");
    if (length == maxlength) {
      if (n != "") {
        n.focus();
      }
      if (e.key === "Backspace") {
        if (p != "") {
          p.focus();
        }
      }
    }
  }
  // otp imput condition end

  public email_login() {
    this.login = !this.login;

    if (this.login) this.buttonName = !this.buttonName;
    else this.buttonName = null;
  }

  public number_login() {
    this.number = !this.number;

    if (this.number) this.buttonName = !this.buttonName;
    else this.buttonName = null;
  }

  public OTP_veryfy() {
    // this.otp = !this.otp;

    if (this.otp) this.buttonName = !this.buttonName;
    else this.buttonName = null;
  }
  phone_otp() {
    this.phoneOTP = !this.phoneOTP;

    if (this.phoneOTP) this.buttonName = !this.buttonName;
    else this.buttonName = null;
  }
  NRI_email() {
    this.nri = !this.nri;

    if (this.nri) this.buttonName = !this.buttonName;
    else this.buttonName = null;
  }

  auth() {
    this.isSubmit = true;
    if (this.auth_form.invalid) {
      return;
    }
  }
}
