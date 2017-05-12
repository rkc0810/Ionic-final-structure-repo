import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { YoutubeVideoPlayer } from 'ionic-native';




@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  register = {}; 
  registerForm;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
        email: [null, Validators.compose([Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])],
        password: [null, Validators.compose([Validators.required,  Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/)])],
        cnfPassword: [null, Validators.compose([Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/)])]
    }); 
  }

  signUp(formData){
    console.log("formData==="+formData);
  }

}
