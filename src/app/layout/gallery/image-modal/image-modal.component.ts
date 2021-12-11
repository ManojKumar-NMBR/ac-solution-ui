import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'tre-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit,AfterViewInit {
  activeImageIndex: number = -1;
  galleryData: any[] = [];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

}
