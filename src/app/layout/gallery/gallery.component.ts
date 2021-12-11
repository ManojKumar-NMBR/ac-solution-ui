import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageModalComponent } from './image-modal/image-modal.component';

@Component({
  selector: 'tre-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryTypes = ['All', 'Geothermal', 'Heating', 'Air Conditioning', 'Indoor Air Quality', 'Maintainence'];
  currentGalleryType = 'All';
  filterGalleryData: any[] = [];

  galleryData = [
    { type: 'Geothermal', src: 'https://aircoolsolutions.in/img/gallery/gallery-7.jpg' },
    { type: 'Heating', src: 'https://aircoolsolutions.in/img/gallery/gallery-5.jpg' },
    { type: 'Maintainence', src: 'https://aircoolsolutions.in/img/gallery/gallery-9.jpg' },
    { type: 'Geothermal', src: 'https://aircoolsolutions.in/img/gallery/gallery-1.jpg' },
    { type: 'Heating', src: 'https://aircoolsolutions.in/img/gallery/gallery-6.jpg' },
    { type: 'Indoor Air Quality', src: 'https://aircoolsolutions.in/img/gallery/gallery-4.jpg' },
    { type: 'Maintainence', src: 'https://aircoolsolutions.in/img/gallery/gallery-8.jpg' },
    { type: 'Maintainence', src: 'https://aircoolsolutions.in/img/gallery/gallery-3.jpg' },
    { type: 'Air Conditioning', src: 'https://aircoolsolutions.in/img/gallery/gallery-5.jpg' },
    { type: 'Air Conditioning', src: 'https://aircoolsolutions.in/img/gallery/gallery-9.jpg' },
  ]

  constructor(private modal: NgbModal,) { }

  ngOnInit(): void {
    this.getFilterGallerData();
  }

  galleryImageHoverIndex = -1;
  getFilterGallerData() {
    if (this.currentGalleryType == 'All')
      this.filterGalleryData = this.galleryData;
    else
      this.filterGalleryData = this.galleryData.filter(d => d.type == this.currentGalleryType);
  }


  onDivClick(image: string) {
    const activeModal = this.modal.open(ImageModalComponent, { centered: true });
    const activeImageIndex = this.filterGalleryData.findIndex(d => d.src == image);

    activeModal.componentInstance.galleryData = this.filterGalleryData;
    setTimeout(() => {
      activeModal.componentInstance.activeImageIndex = activeImageIndex;
    }, 100);
  }

}
