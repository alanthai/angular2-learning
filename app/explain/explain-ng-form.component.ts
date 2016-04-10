import {Component} from 'angular2/core';

@Component({
  selector: 'explain-ng-form',
  template: `
    <h3><code>ngForm</code></h3>
    <p>
      Technically, importing <code>NgForm</code> isn't strictly
      necessary since it's included in FORM_DIRECTIVES.
      We're using it here for TypeScript typing.
    </p>

    <p>
      By having NgForm in your component directive, Angular will look
      for the form tag and attach an instance of itself to it,
      transforming it into an Angular 2 form.
    </p>

    <p>
      This provides the form a variety of features,
      like the <code>ngSubmit</code> callback on form submit,
      and binds your form controls with added validation capabilities.
    </p>

    <p>
      Note: All this is added without changing the HTML.
    </p>
  `
})
export class ExplainNgFormComponent { }
