import { Component, OnInit } from '@angular/core';

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
    { type: 'Heating', src: 'https://aircoolsolutions.in/img/gallery/gallery-6.jpg' }
  ]

  constructor() { }

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

}
