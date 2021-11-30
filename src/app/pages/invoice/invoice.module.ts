import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InvoicePageRoutingModule } from './invoice-routing.module';
import { InvoicePage } from './invoice.page';

@NgModule({
    imports: [IonicModule, CommonModule, FormsModule, InvoicePageRoutingModule],
    declarations: [InvoicePage],
})
export class InvoiceModule {}
