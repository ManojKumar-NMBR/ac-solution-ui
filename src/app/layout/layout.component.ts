import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tre-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  pageMenus = [
    { name: 'Home', path: 'home' },
    { name: 'About us', path: 'aboutUs' },
    {
      name: 'Services', path: 'services',
      children: [
        { name: 'AC-Gas', path: '' },
        { name: 'AC-Installation', path: '' },
        { name: 'AC-Rent', path: '' },
        { name: 'Repair & Service', path: '' },
      ]
    },
    { name: 'Gallery', path: 'pages/gallery' },
    { name: 'Contact Us', path: 'pages/contactUs' }
  ];

  goToBlock(pathName: string) {
    this.router.navigateByUrl(pathName);

    /* var block: HTMLElement = <HTMLElement>document.getElementById(blockName);
    block?.scrollIntoView({ behavior: 'smooth' }); */
    /* if (blockName != 'homeBlock') {
      setTimeout(() => {
        document.documentElement.scrollTop = document.documentElement.scrollTop + 165;
      }, 1000);
    } */
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
