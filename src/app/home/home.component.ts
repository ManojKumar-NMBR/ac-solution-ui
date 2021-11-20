import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tre-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carouselSlideData = [
    { id: 0, bgImgClass: 'carouselSlide-0', firstText: 'First', secondText: '', thirdText: '' },
    { id: 1, bgImgClass: 'carouselSlide-1', firstText: 'Second', secondText: '', thirdText: '' },
    { id: 2, bgImgClass: 'carouselSlide-2', firstText: 'Third', secondText: '', thirdText: '' },
    { id: 3, bgImgClass: 'carouselSlide-3', firstText: 'Fourth', secondText: '', thirdText: '' }
  ];

  pageMenus = [
    { name: 'Home', path: 'home', block: '#homeBlock' },
    { name: 'About us', path: 'aboutUs', block: '#aboutUsBlock' },
    {
      name: 'Services', path: 'services',
      children: [
        { name: 'AC-Gas', page: '' },
        { name: 'AC-Installation', page: '' },
        { name: 'AC-Rent', page: '' },
        { name: 'Repair & Service', page: '' },
      ]
    },
    { name: 'Gallery', path: 'gallery' },
    { name: 'Contact Us', path: 'contactUs', }
  ];

  goToBlock(menu: any, event: any) {
    debugger

    if (menu.block && menu.block != '') {
      document.querySelector(menu.block).scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/pages', menu.path]);
    }

    /* if (blockName != 'homeBlock') {
      setTimeout(() => {
        document.documentElement.scrollTop = document.documentElement.scrollTop + 165;
      }, 1000);
    } */
  }

  constructor(private cdf: ChangeDetectorRef, private router: Router) { }

  ngOnInit() {
    this.adjustsItemsPerSlide();
  }

  ngAfterViewInit() {
    this.cdf.detectChanges();
  }



  @ViewChild('scrollMe') myScrollContainer!: ElementRef;
  getNavBarClass() {
    // console.log(this.myScrollContainer);
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;


    if (document.documentElement.scrollTop && document.documentElement.scrollTop > 5)
      return 'navBarTransparent';
    else
      return '';
  }

  getCarouselClass(index: number) {
    return this.carouselSlideData[index].bgImgClass;
  }

  serviceData = [
    { title: 'Buy Property', image: 'buyProperty.png', content: 'Invest in real estate today and reap the benefits tomorrow. We have huge connectivity to let you choose and buy from.' },
    { title: 'Rent Property', image: 'rentProperty.png', content: 'Discover homes that fit into your price range. Tell us your budget and we will find the best homes for your choice.' },
    { title: 'Resale Property', image: 'resaleProperty.png', content: 'Sell your existing property to make the most out of it. We will direct the right choice of customers to you.' },
    { title: 'Registration and stamps', image: 'registrationAndStamps.png', content: 'Sell your existing property to make the most out of it. We will direct the right choice of customers to you.' }
  ];

  contactData = [
    { image: 'home.png', title: 'Our Office Address', content: 'Malad West, Mumbai, Maharashtra 400064' },
    { image: 'email.png', title: 'General Enquiries', content: 'contact@mysites.com' },
    { image: 'phone.png', title: 'Call Us', content: '+91-8888888888' },
    { image: 'time.png', title: 'Our Office Address', content: 'Mon - Sun : 09:00 AM - 09:00 PM' },
  ]

  aboutUsData = [
    { name: 'Mr. K. SRINIVAS REDDY', designation: 'Founder & Managing Director', image: 'buyProperty.png', about: 'He is the Managing Director of Shathabdhi Townships, Sri. K. Srinivasareddy is a successful real estate professional for more than a decade, his success has been due to his clear cut vision and long term planning is making the company Prosper the company year after year.' },
    { name: 'K. LAXMI', designation: 'Director', image: 'rentProperty.png', about: 'She is one of the Directors of Shathabdhi Townships. Contributing her valuable suggestions and advice time and again to the Director, She has been an active board member diligently working towards the growth and progress of Shathabdhi Townships.' },
    { name: 'K.VENUMADHAV REDDY', designation: 'Director', image: 'resaleProperty.png', about: 'The youngest and the most dynamic among the Directors, Venumadhav Reddy has been playing a vital role in the planning and execution of the ventures. Being a youngster, he has his own innovative approach towards the projects and all endeavors have been quite successful. Playing an important role in all the ventures of Shathabdhi Townships, He is the young promising face of Shathabdhi Townships.' },
    { name: 'K. ARUNA DEVI', designation: 'Director', image: 'registrationAndStamps.png', about: 'Being one of the most important Directors of Shathabdhi Townships, She hasn’t been sparing no stone un-turned in making every project a successful venture. Thanks to her foresightedness, all her efforts to make ventures of Shathabdhi Townships a trust-worthy, reliable and investor-friendly have been yielding good results.' }
  ];

  weAreList = [
    { service: "Classic AirCon is a indipendent AC repair service provide." },
    { service: "We are expert technician , believe in client satisfaction." },
    { service: "We are experienced more then 7 years in this field." },
    { service: "Provide Service to our valuable customer in Delhi/NCR." },
    { service: "On day service promiss." },
    { service: "Providing warranty for 90 days." },
    { service: "We don't charge if fail to repair." },
    { service: "We always use original parts in case of replacement." }
  ]

  acServicesData = [
    { name: 'Air Conditioning', image: 'air-conditioning.png' },
    { name: 'Gas Filling', image: 'gas-filling.png' },
    { name: 'Replacement & Installation', image: 'replacement-installation.png' },
    { name: 'Service & Repairs', image: 'services-repairs.png' }
  ];

  aboutAirCoolSolution = "As the temperatures increments and the climate gets harsher, you'd need to ensure you have a working AC framework in your home which is vitality productive.Regardless of whether you are introducing spic and span AC or experiencing outine upkeep, it's critical to employ the opportune individual for the activity. We are a multifaceted supplier that exceeds expectations as a solitary source answer for all your Ac prompt needs and administrations.Be it, AC Gas filling in Delhi, AC gas topping off in Noida, AC gas recording best costs, simply ring us.We are multipurpose specialist organizations of AC frameworks inside the territories referenced previously.";

  clientData = [
    { title: 'Hard Worker', content: 'The team is really very hard worker, they installed my ac as a place where every one has declined.', client: '- Rakesh Jaiswal' },
    { title: 'Great Warranty', content: 'I was too much surpriced when they came my home for repated service(in warranty period) on a single call.', client: '- Suresh Gupta' },
    { title: 'AC Rent Service', content: 'Last year i got a AC on rent, after 3 month my ac was creating problem, i just made a call and got my ac change instantly. ', client: '- Riya Sing' },
    { title: 'Instant Service', content: 'They are vary punctual to time, they came my hoem at the time to told me, impressive service.', client: '- Sunita Mishra' },
    { title: 'Cost Effective', content: 'Indina Aircool team charged me too low as compare to market. And Service is excellent. Thank you', client: '- Mohan Rai' },
    { title: 'Great Warranty', content: 'I was too much surpriced when they came my home for repated service(in warranty period) on a single call.', client: '- Suresh Gupta' },
  ];

  itemsPerSlide = 3;
  private innerWidth = 0;
  private mobileBreakpoint = 480;
  private adjustsItemsPerSlide() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < this.mobileBreakpoint) {
      this.itemsPerSlide = 1;
    } else {
      this.itemsPerSlide = 3;
    }
  }

}
