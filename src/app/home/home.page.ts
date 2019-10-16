import { Component } from '@angular/core';
declare var cordova:any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  testplugin(){
    var success = function(result) {
      alert(JSON.stringify(result, undefined, 2));
    }
    var failure = function(result) {
      alert(JSON.stringify(result, undefined, 2));
    }
    cordova.plugins.VolleyPlugin.coolMethod({
      _sMessage: "Hello World"
    }, success, failure);
  }

}
