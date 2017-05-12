import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Services } from '../../providers/services';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Services]
})
export class HomePage {
  public users = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public services: Services) {
    this.users = navParams.get('users');
    this.setDefaults();
  }

  setDefaults() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  itemSelected(item) {
    console.log(item);
  }

  ionViewDidLoad() {

    // this.users = localStorage.getItem('users');
  }

}
