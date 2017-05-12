import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Services } from '../../providers/services';
import { Utils } from '../../providers/utils';
import { HomePage } from '../home/home';


/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[Services, Utils]
})
export class LoginPage {
  public users;
  constructor(public alertCtrl: AlertController, public utils: Utils, public services: Services, public navCtrl: NavController, public navParams: NavParams) {
  	this.doLogin();
  }

  doLogin() {
  		this.services.doLogin().then((response)=>{        	  
        	  this.users = response;        	         	  
        	  this.navCtrl.push(HomePage,{users:this.users}).then(() => {				  
				  this.navCtrl.remove(0, this.navCtrl.getActive().index);
			  });        	 				          	      		         
        }, (err) =>{        	
		    this.utils.showAlertDialog("Error!","unable to login");
        });
  }

}
