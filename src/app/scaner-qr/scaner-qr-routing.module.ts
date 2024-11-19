import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanerQRPage } from './scaner-qr.page';

const routes: Routes = [
  {
    path: '',
    component: ScanerQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanerQRPageRoutingModule {}
