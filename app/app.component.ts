import {Component, DynamicComponentLoader, Injector} from 'angular2/core';
import {
  FormComponent,
  FormComponentHTML,
  FormComponentJS,
  FormComponentViews,
} from './form.component';

@Component({
    selector: 'my-app',
    directives: [FormComponent],
    template: `
      <h1>Angular 2 Forms</h1>
      <div>
        <div class="flex justify-around">
          <pre class="bg-silver rounded p1 col col-6">
          ${FormComponentHTML}</pre>
          <div id="html" class="col col-6 p1"></div>
        </div>
        <div class="flex justify-around">
          <pre class="bg-silver rounded p1 col col-6">
          ${FormComponentJS}</pre>
          <div id="js" class="col col-6 p1"></div>
        </div>
      </div>
      <div class="bold">Result:</div>
      <div class="center border p2">
        <my-form (onSubmit)="changeFormValue($event)"></my-form>
        <pre>{{ formValue | json }}</pre>
      </div>
    `
})
export class AppComponent {
  private formValue;

  constructor(
    private dcl: DynamicComponentLoader,
    private injector: Injector
  ) {
    this.setView('html', 'formVariable');
    this.setView('js', 'formDirectives');
  }

  changeFormValue(formValue) {
    this.formValue = formValue;
  }

  setView(view, tab) {
    this.dcl.loadAsRoot(
      FormComponentViews[tab],
      `#${view}`,
      this.injector);
  }

  handleClick(view, tab) {
    this.setView(view, tab);
  }
}
