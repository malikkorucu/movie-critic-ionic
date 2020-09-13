import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  selectedIndexMenu = 0
  constructor(
    private toastController: ToastController,
  ) { }


  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  doRefresh(event) {
    window.location.reload()
  }
}
