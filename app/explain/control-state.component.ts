import {Component} from 'angular2/core';

@Component({
  selector: 'control-variable',
  template: `
    <h3>Control state</h3>
    <p>
      The form and its controls have states that describe
      how the user has interacted with the it.
    </p>

    <div class="clearfix">
      <div class="bg-darken">
        <div class="col col-2 p1 border-bottom bold">State</div>
        <div class="col col-10 p1 border-bottom bold">Meaning</div>
      </div>
      <div>
        <div>
          <div class="col col-2 p1 border-bottom">prstine</div>
          <div class="col col-10 p1 border-bottom">The field has just been rendered and hasn't been modified</div>
        </div>
        <div>
          <div class="col col-2 p1 border-bottom">dirty</div>
          <div class="col col-10 p1 border-bottom">The field has been modified</div>
        </div>
        <div>
          <div class="col col-2 p1 border-bottom">touched</div>
          <div class="col col-10 p1 border-bottom">The field has been modified and has lost focus</div>
        </div>
        <div>
          <div class="col col-2 p1">valid</div>
          <div class="col col-10 p1">The field is passing all the validators</div>
        </div>
      </div>
    </div>
  `
})
export class ControlStateComponent { }
