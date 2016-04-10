import {Component} from 'angular2/core';

@Component({
  selector: 'on-submit',
  template: `
    <h3>Form submission</h3>
    <p>
      <code>ngSubmit</code> was attached to the form.
      Clicking a submit button will trigger a click
      event to be fired.
    </p>
  `
})
export class OnSubmitComponent { }
