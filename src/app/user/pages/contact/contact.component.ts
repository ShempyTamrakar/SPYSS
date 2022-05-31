import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: FormGroup;
  isSubmit = false;
  constructor(private _fb: FormBuilder) {
    this.contact = this._fb.group({
      fullName: ["", [Validators.required, Validators.email]],
      email: ["", Validators.required],
      message: ["", Validators.required],
    });
  }

  ngOnInit() {
  }
  submit() {
    this.isSubmit = true;
    if (this.contact.invalid) {
      return;
    }
  }
}
