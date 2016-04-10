import {Component} from 'angular2/core';

@Component({
  selector: 'form-validate',
  template: `
    <h3>Form validation</h3>
    <p>
      Regular form validation attributes will work.
      Template variables can check the input's validity through
      <code>regForm.valid</code>, <code>email.valid</code>,
      and <code>password.valid</code>.
    </p>
  `
})
export class FormValidateComponent { }
