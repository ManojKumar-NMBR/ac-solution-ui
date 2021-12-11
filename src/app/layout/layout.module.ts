import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageModalComponent } from './gallery/image-modal/image-modal.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [ContactUsComponent, GalleryComponent, TeamComponent, ImageModalComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbNavModule,
    NgbModule,
    CarouselModule
  ]
})
export class LayoutModule { }
