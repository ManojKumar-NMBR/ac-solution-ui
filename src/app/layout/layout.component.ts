import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

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
        { name: 'AC-Gas', page: '/pages/services/ac-gas' },
        { name: 'AC-Installation', page: 'pages/services/ac-isntallation' },
        { name: 'AC-Rent', page: '/pages/services/ac-rent' },
        { name: 'Repair & Service', page: '/pages/services/repair-rent' }
      ]
    },
    { name: 'Gallery', path: 'pages/gallery' },
    { name: 'Team', path: 'pages/team' },
    { name: 'Contact Us', path: 'pages/contactUs' }
  ];

  goToBlock(pathName: string) {
    debugger
    if (['services'].includes(pathName.toLowerCase()))
      return;

    this.router.navigateByUrl(pathName);

    /* var block: HTMLElement = <HTMLElement>document.getElementById(blockName);
    block?.scrollIntoView({ behavior: 'smooth' }); */
    /* if (blockName != 'homeBlock') {
      setTimeout(() => {
        document.documentElement.scrollTop = document.documentElement.scrollTop + 165;
      }, 1000);
    } */
  }

  nothing() {
    return null;
  }

  constructor(private router: Router) { }

  pagePathTitle = '';
  ngOnInit(): void {
    this.setPagePathTitleValue();

    this.router.events.subscribe((val: Event) => {
      // highlight side menu
      if (val instanceof NavigationEnd) {
        this.setPagePathTitleValue();
        console.log(this.router.url);
      }
    });
  }

  setPagePathTitleValue() {
    console.log(this.router.url);
    if (this.router.url.includes('contactUs')) {
      this.pagePathTitle = 'Contact US';
    }
    if (this.router.url.includes('team')) {
      this.pagePathTitle = 'Team';
    }
    else if (this.router.url.includes('gallery')) {
      this.pagePathTitle = 'Gallery';
    } else if (this.router.url.includes('services')) {
      const splitURL = this.router.url.split('/');

      this.pagePathTitle = 'Services > ' + splitURL[splitURL.length - 1];
    }



  }

  gotoHome() {
    this.router.navigate(['home']);
  }

}
