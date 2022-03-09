import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'app-infor-form',
  templateUrl: './infor-form.component.html',
  styleUrls: ['./infor-form.component.scss'],
})
export class InforFormComponent implements OnInit {
  genders = ['Male', 'Female', 'Others', 'I do not wish to say'];

  model: Person = {
    position: 0,
    name: 'John Wick',
    email: 'donottake@mydog.com',
    contactNumber: '0123456789',
    gender: this.genders[0],
    notes:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  };

  submitted = false;

  contactRegex = new RegExp(/^\d{8,12}$/);

  emailRegex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  constructor() {}

  onSubmit() {
    this.submitted = true;
  }

  onEdit() {
    this.submitted = false;
  }

  ngOnInit(): void {}
}
