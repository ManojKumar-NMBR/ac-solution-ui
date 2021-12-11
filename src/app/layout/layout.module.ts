import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageModalComponent } from './gallery/image-modal/image-modal.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SidebarModule } from 'primeng/sidebar';
import { TestComponent } from './test/test.component'; 

@NgModule({
  declarations: [ContactUsComponent, GalleryComponent, TeamComponent, ImageModalComponent, TestComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbNavModule,
    NgbModule,
    CarouselModule,
    SidebarModule 
  ]
})
export class LayoutModule { }
