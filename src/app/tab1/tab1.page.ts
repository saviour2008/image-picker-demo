import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';
@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
    public test: any = null;
    public items: any = [{ src: 'assets/bank.png' }];

    constructor(private http: HttpClient, private navCtrl: NavController) {}
    actionGet() {
        console.log(123);
        this.test = this.http.get('/api/list').subscribe((res) => {
            console.log(res);
        });
        this.navCtrl.navigateForward('/invoice', {
            animated: true,
            animationDirection: 'forward',
        });
    }
}
