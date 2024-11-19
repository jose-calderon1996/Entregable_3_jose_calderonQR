import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanerQRPageRoutingModule } from './scaner-qr-routing.module';

import { ScanerQRPage } from './scaner-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanerQRPageRoutingModule
  ],
  declarations: [ScanerQRPage]
})
export class ScanerQRPageModule {}
