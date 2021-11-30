import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';
@Component({
    selector: 'invoice-ticket',
    templateUrl: 'ticket.page.html',
    styleUrls: ['ticket.page.scss'],
})
export class TicketPage {
    constructor(private http: HttpClient, private navCtrl: NavController) {}
    actionGet() {}
    back() {
        console.log(456);
        this.navCtrl.back();
    }
}
