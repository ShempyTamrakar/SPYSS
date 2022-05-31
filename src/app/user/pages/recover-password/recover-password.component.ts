import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {
  auth_form: FormGroup;
  isSubmit = false;
  constructor(private _fb: FormBuilder) {
    this.auth_form = this._fb.group({
      email: ["", [Validators.required, Validators.email]],
    });
   }

  ngOnInit() {
  }
  login() {
    this.isSubmit = true;
    if(this.auth_form.invalid) {
      return;
    }
  }

}
