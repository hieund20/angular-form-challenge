import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-infor-form',
  templateUrl: './infor-form.component.html',
  styleUrls: ['./infor-form.component.scss'],
})
export class InforFormComponent implements OnInit {
  genders = ['-Select-', 'Male', 'Female', 'Others', 'I do not wish to say'];

  model = new Person(
    'John Wick',
    'donottake@mydog.com',
    '0123456789',
    this.genders[1],
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  );

  submitted = false;

  isInvalidGender = false;

  isInvalidContact = true;
  contactRegex = new RegExp(/^\d{8,12}$/);

  isInvalidEmail = true;
  emailRegex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  constructor() {}

  onGendersChange(selected: any) {
    if (selected === this.genders[0]) {
      this.isInvalidGender = true;
    } else {
      this.isInvalidGender = false;
    }
  }

  onContactChange(value: any) {
    if (this.contactRegex.test(value)) {
      this.isInvalidContact = true;
    } else {
      this.isInvalidContact = false;
    }
  }

  onEmailChange(value: any) {
    if (this.emailRegex.test(value)) {
      this.isInvalidEmail = true;
    } else {
      this.isInvalidEmail = false;
    }
  }

  onSubmit() {
    this.submitted = true;
  }

  onEdit() {
    this.submitted = false;
  }

  ngOnInit(): void {}
}
