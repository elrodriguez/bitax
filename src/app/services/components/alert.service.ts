import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  isAlert = false;
  alert: any;

  constructor( public alertController: AlertController ) { }

  async presentAlert(title: string,subTitle: string, msg: string) {
    this.isAlert = true;
    this.alert = await this.alertController.create({
      header: title,
      subHeader: subTitle,
      message: msg,
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.hideLoading();
        }
      }]
    });

    return await this.alert.present().then(() => {
      console.log('presented');
      if (!this.isAlert) {
        this.alert.dismiss().then(() => console.log('abort presenting'));
      }
    });
  }

  async hideLoading() {
    this.isAlert = false;
    return await this.alert.dismiss().then(() => console.log('dismissed'));
  }

}
