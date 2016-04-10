import {Component} from 'angular2/core';

@Component({
  selector: 'form-variable',
  template: `
    <h3>Attach template variable to NgForm instance</h3>
    <div>
      We assign a template variable <code>regForm</code> to link
      to the form's main NgForm directive instance, called ngForm. Doing so allows
      us to pass it to our component in the <code>onSubmit</code> method,
      and access its properties.
    </div>
  `
})
export class FormVariableComponent {
  public static Route = {
    path: '/form-variable',
    name: 'FormVariable',
    component: FormVariableComponent
  };
}
