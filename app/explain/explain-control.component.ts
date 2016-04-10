import {Component} from 'angular2/core';

@Component({
  selector: 'explain-control',
  template: `
    <h3><code>ngControl</code></h3>
    <p>
      Angular doesn't recognize the nested fields
      as controls belonging to the form.
      To make this association explicit, we need to
      use the directive <code>ngControl</code> on our form fields.
    </p>
  `
})
export class ExplainControlComponent { }
