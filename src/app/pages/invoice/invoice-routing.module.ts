import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicePage } from './invoice.page';

const routes: Routes = [
    {
        path: '',
        component: InvoicePage,
        children: [
            {
                path: 'home',
                loadChildren: () =>
                    import('./home/home.module').then((m) => m.HomePageModule),
            },
            {
                path: 'ticket',
                loadChildren: () =>
                    import('./ticket/ticket.module').then(
                        (m) => m.TicketPageModule
                    ),
            },
            {
                path: '',
                redirectTo: '/invoice/home',
                pathMatch: 'full',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InvoicePageRoutingModule {}
