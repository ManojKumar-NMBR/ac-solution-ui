import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { AcGasComponent } from './ac-gas/ac-gas.component';
import { AcInstallationComponent } from './ac-installation/ac-installation.component';
import { AcRentComponent } from './ac-rent/ac-rent.component';
import { RepairRentComponent } from './repair-rent/repair-rent.component';


@NgModule({
  declarations: [AcGasComponent, AcInstallationComponent, AcRentComponent, RepairRentComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
