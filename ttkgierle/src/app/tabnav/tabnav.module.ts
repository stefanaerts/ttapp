import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

import { TabnavPageRoutingModule } from './tabnav-routing.module';

import { TabnavPage } from './tabnav.page';
const routes: Routes = [
  {
    path: 'tabs-nav',
    component: TabnavPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: '../dashboard/dashboard.module#DashboardPageModule'
      },
      {
        path: 'products',
        loadChildren: '../products/products.module#ProductsPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs-nav/dashboard'
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabnavPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabnavPage]
})
export class TabnavPageModule {}
