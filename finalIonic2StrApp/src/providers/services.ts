import { Injectable } from '@angular/core';
import { Http, RequestMethod, RequestOptionsArgs, Headers} from '@angular/http';
import { AppConstants } from '../providers/values';
import 'rxjs/add/operator/map';
import { NavController, LoadingController } from 'ionic-angular/index';


@Injectable()
export class Services {

  public users;
  constructor(public http: Http, public loadingCtrl: LoadingController ) {}

  doLogin() {
  		let URI = AppConstants.DEMO_MODE_ENABLED? AppConstants.MOCK_URI_USERS: AppConstants.BASE_URI+AppConstants.URI_USERS;
       	return this.callGetRequest(URI);
  }

  getCategories(){
  	    let URI = AppConstants.DEMO_MODE_ENABLED? AppConstants.MOCK_URI_CATEGORIES: AppConstants.MOCK_URI_CATEGORIES;
  }

  setUser(users){
  	this.users = users;
  }

  getUser(){
  	return this.users;
  }

  private showLoader() {
		let loader = this.loadingCtrl.create({
			content: "Fetching details..."
		});
		loader.present();
		return loader;
  }

  private getHttpRequest(url: string, requestMethod: RequestMethod, body?: any) {
	    return new Promise((resolve, reject) => {
		      let requestOptionArgs: RequestOptionsArgs;
		      requestOptionArgs = {
		        url: url,
		        method: requestMethod,
		        body: body,
		        headers: new Headers({
		          "Content-Type": "application/json"
		        })
	          }  
	        let loader = this.showLoader();
	        
	        this.http.request(url, requestOptionArgs)
	        .map(res => res.json())
	        .subscribe(data => {
	          // we've got back the raw data, now generate the core schedule data
	          // and save the data for later reference

	          // Dismiss the loader and return response back.
	          loader.dismiss().then(() => resolve(data));

	        }, (error) => {
	          // Dismiss the loader and return error back.
	          loader.dismiss().then(() => reject(error));
	        });    
       });
    }

	public callGetRequest(url: string) {
		return this.getHttpRequest(url, RequestMethod.Get);
	}

	public callPutRequest(url: string, body?: any) {
		return this.getHttpRequest(url, RequestMethod.Put, body);
	}

	public callPostRequest(url: string, body?: any) {
		return this.getHttpRequest(url, RequestMethod.Post, body);
	}

}
