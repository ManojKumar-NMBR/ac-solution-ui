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
    { image: 'home.png', title: 'Our Office Address', content: 'Flat No. 80, Street No. -7,Bank Colony, Mandoli , Delhi -93' },
    { image: 'email.png', title: 'General Enquiries', content: 'tyagi.kanchit@gmail.com' },
    { image: 'phone.png', title: 'Call Us', content: '+91-9911442140' },
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
    { service: "We are experienced more then 17 years in this field." },
    { service: "Provide Service to our valuable customer in Delhi/NCR." },
    { service: "On day service promiss." },
    { service: "Providing warranty for 90 days." },
    { service: "We don't charge if fail to repair." },
    { service: "We always use original parts in case of replacement." }
  ]

  

  strategyList = [
    { service: "Ensuring that our clients remain our business partners;" },
    { service: "Implementation of mutually acceptable contracts." },
    { service: "Exceed our client’s expectations while satisfying their specific needs." },
    { service: "Delivery of high quality services." },
    { service: "Turnkey projects (including all ancillaries such as Ventilation, G.I. ducting, MS piping, Copper piping, insulation, etc.)" },
    { service: "Comfort Cooling conditions, like in Offices, Residences and Malls etc." },
    { service: "Renovation and Modification of existing equipment to suit actual user requirement." },
    { service: "Operation / AMC of / for major Air-conditioning Installations." },
    { service: "We undertake above jobs / systems right from CONCEPT state to COMMISSIONING & TRIAL RUN and are equipped with the requisite resources, vital for optimum level of performance." },
    { service: "We have already registered in Delhi and Uttar Pradesh (U.P.)" },
    { service: "Our H.O. in Delhi & Branch Off. U.P." },
    { service: "Electrical work (wring, lighting, ear thing, machine Installation, panel installation, three phase, single phase. " },
    { service: "Firefighting, smoke deducting, CCTV camera, fire alarm, security system etc." },
    { service: "Electrical welding , gas welding ,MS pipe & S S pipe." },
    { service: "Paint Work (distemper, enamel, hygienic 3D effect, apex, emulsion, cement based, wallpaper canvas, & theme etc." },
    { service: "Gypsum Four celling, Tile & Other Four Celling." },
    { service: "Any enquiry from you will elicit our meticulous attention and we shall fulfill all your expectations of material and workmanship quality." }
  ]


  acServicesData = [
    { name: 'Air Conditioning', image: 'air-conditioning.png' },
    { name: 'Gas Filling', image: 'gas-filling.png' },
    { name: 'Replacement & Installation', image: 'replacement-installation.png' },
    { name: 'Service & Repairs', image: 'services-repairs.png' }
  ];

  aboutAirCoolSolution = "We wish to introduce ourselves as one of the prominent Outsourcing " +
                          "Refrigeration and HVAC Contractors, Civil contractors, electrical "+
                          "contractors ,Paint ,four celling Work. Ours is a team of qualified and "+
                          "experienced Engineers & Technicians having the necessary expertise to design "+
                          "and execute any system or project in Refrigeration & HVAC. We have executed "+
                          "various such projects in India for the private sector as well as Government sector. "+
                          "We have adequate manpower including skilled personnel and mechanics that "+
                          "can meet all your requirements at the time of your order execution & also for "+
                          "meeting your requirement of after sales services. We would like to mention that "+
                          "we work best under stress conditions, when the project has to be executed on "+
                          "war footing within your time schedule.";

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
