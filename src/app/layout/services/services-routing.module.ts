import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcGasComponent } from './ac-gas/ac-gas.component';
import { AcInstallationComponent } from './ac-installation/ac-installation.component';
import { AcRentComponent } from './ac-rent/ac-rent.component';
import { RepairRentComponent } from './repair-rent/repair-rent.component';

const routes: Routes = [
  { path: '', redirectTo: 'ac-gas', pathMatch: 'full' },
  { path: 'ac-gas', component: AcGasComponent },
  { path: 'ac-isntallation', component: AcInstallationComponent },
  { path: 'ac-rent', component: AcRentComponent },
  { path: 'repair-rent', component: RepairRentComponent },
  { path: '**', redirectTo: 'ac-gas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
