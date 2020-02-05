import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../component/home/home.component'
import { ListSupplierComponent } from '../component/list-supplier/list-supplier.component'
import { AddSupplierComponent } from '../component/add-supplier/add-supplier.component';

const APP_ROUTES: Routes =  [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent }, /** route for HomeComponent */
    { path: 'add-supplier', component: AddSupplierComponent }, /** route for AddSupplierComponent */
    { path: 'list-supplier', component: ListSupplierComponent } /** route for ListSupplierComponent */
 
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
