import {Component} from 'angular2/core';

@Component({
  selector: 'no-validate',
  template: `
    <h3>Disable default validation</h3>
    <p>
      We are using the attribute <code>novalidate</code> in our form
      to prevent the browser from performing its built-in validation
    </p>
  `
})
export class NoValidateComponent { }
