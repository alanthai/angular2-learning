import {Component} from 'angular2/core';

@Component({
  selector: 'control-variable',
  template: `
    <h3>Control template variables</h3>
    <p>
      We assign a template variable <code>#email</code>
      and <code>#password</code> to link to their respective
      <code>NgControlName</code> instances -- also called ngForm.
      We instantiate these variables in order to pass them
      to <code>ngControl</code> and validation.
    </p>

    <p>
      Note: Both the controls and the form use <code>ngForm</code>
      to reference their respective directive instances.
      The fact that they are named the same is a choice from the Angular,
      and set through the directive's <code>exportAs</code> meta property.
    </p>
  `
})
export class ControlVariableComponent { }
