import {Component, EventEmitter, Output} from 'angular2/core';
import {FORM_DIRECTIVES, NgForm} from 'angular2/common';

import {
  escapeHTML,
  applyRoute,
  applyClick,
  omit,
  compose
} from './helpers/util';

import {
  ControlErrorsComponent,
  ControlStateComponent,
  ControlVariableComponent,
  ExplainControlComponent,
  ExplainNgFormComponent,
  FormValidateComponent,
  FormVariableComponent,
  FormDirectivesComponent,
  NoValidateComponent,
  OnSubmitComponent,
} from './explain/index';

const fromHTML = compose(applyClick, escapeHTML);

const template = `
<form [&html,formVariable[#regForm="ngForm"]]
  [&html,onSubmit[(ngSubmit)="handleSubmit(regForm)"]]
  [&html,noValidate[novalidate]]>

  <div>
    <label for="email">Email:</label>
    <input type="email" id="email"
      [&html,explainControl[ngControl="email"]] [&html,controlVariable[#email="ngForm"]] [&html,formValidate[required]]>
    <ul *ngIf="[&html,controlState[email.dirty && !email.valid]]">
      <li *ngIf="[&html,controlErrors[email.errors.required]]">
        An email is required</li>
    </ul>
  </div>

  <div>
    <label for="password">Password:</label>
    <input type="password" id="password"
      [&html,explainControl[ngControl="password"]]
      [&html,controlVariable[#password="ngForm"]] [&html,formValidate[minlength="4" required]]>
    <ul *ngIf="[&html,controlState[password.dirty && !password.valid]]">
      <li *ngIf="[&html,controlErrors[password.errors.required]]">
        A password is required</li>
      <li *ngIf="[&html,controlErrors[password.errors.minlength]]">
        A password needs to have at least 4 characters</li>
    </ul>
  </div>

  <button type="submit" [disabled]="[&html,controlState[!regForm.valid]]">
    Register
  </button>
</form>
`;

const formTemplate = omit(template);

export const FormComponentHTML = fromHTML(template);
export const FormComponentJS = applyClick(`
import {Component, EventEmitter, Output} from 'angular2/core';
import {[&js,formDirectives[FORM_DIRECTIVES]], [&js,explainNgForm[NgForm]]} from 'angular2/common';

@Component({
  selector: 'my-form',
  [&js,explainNgForm[directives: [FORM_DIRECTIVES], ]]
  template: formTemplate
})
export class FormComponent {
  @Output() private onSubmit = new EventEmitter();

  handleSubmit(form: NgForm) {
    this.onSubmit.emit(form.value);
  }
}
`);
export const FormComponentViews = {
  // html
  controlErrors: ControlErrorsComponent,
  controlVariable: ControlVariableComponent,
  controlState: ControlStateComponent,
  explainControl: ExplainControlComponent,
  formVariable: FormVariableComponent,
  formValidate: FormValidateComponent,
  noValidate: NoValidateComponent,
  onSubmit: OnSubmitComponent,

  // js
  formDirectives: FormDirectivesComponent,
  explainNgForm: ExplainNgFormComponent,
};

@Component({
  selector: 'my-form',
  directives: [FORM_DIRECTIVES],
  template: formTemplate
})
export class FormComponent {
  @Output() private onSubmit = new EventEmitter();

  handleSubmit(form: NgForm) {
    this.onSubmit.emit(form.value);
  }
}
