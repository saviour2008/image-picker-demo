import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./tabs/tabs.module').then((m) => m.TabsPageModule),
    },
    {
        path: 'invoice',
        loadChildren: () =>
            import('./pages/invoice/invoice.module').then(
                (m) => m.InvoiceModule
            ),
    },
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
