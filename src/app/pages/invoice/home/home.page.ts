import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ActionSheetController, NavController } from '@ionic/angular';
@Component({
    selector: 'invoice-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    public bannerImg = '';
    constructor(
        private http: HttpClient,
        private navCtrl: NavController,
        private actionSheetController: ActionSheetController
    ) {}

    back() {
        console.log(456);
        this.navCtrl.back();
    }
    async presentActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            cssClass: 'my-custom-class',
            buttons: [
                {
                    text: '拍照',
                    icon: 'camera',
                    handler: () => {
                        console.log('Delete clicked');
                    },
                },
                {
                    text: '从相册选择',
                    icon: 'albums',
                    handler: () => {
                        console.log('Share clicked');
                    },
                },
                {
                    text: 'Cancel',
                    icon: 'close',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    },
                },
            ],
        });
        await actionSheet.present();
        const { role } = await actionSheet.onDidDismiss();
        console.log('onDidDismiss resolved with role', role);
    }
}
