import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ContactUsComponent, GalleryComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbNavModule
  ]
})
export class LayoutModule { }
