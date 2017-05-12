import { Injectable } from '@angular/core';
import { AppConstants } from '../providers/values';
import { NavController, AlertController} from 'ionic-angular';
import { AbstractControl, ValidatorFn } from '@angular/forms';




@Injectable()
export class Utils {

  constructor(public nav: NavController, public alertCtrl: AlertController ) {}
  
  showAlertDialog(title, subTitle) {  	
	let alert = this.alertCtrl.create({
        title: title,
        subTitle: subTitle,
        buttons: ['OK']
    });
    alert.present();    
  }

}

