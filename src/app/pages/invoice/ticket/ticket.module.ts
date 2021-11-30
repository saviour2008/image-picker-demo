import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketPage } from './ticket.page';

import { TicketPageRoutingModule } from './ticket-routing.module';

@NgModule({
    imports: [IonicModule, CommonModule, FormsModule, TicketPageRoutingModule],
    declarations: [TicketPage],
})
export class TicketPageModule {}
