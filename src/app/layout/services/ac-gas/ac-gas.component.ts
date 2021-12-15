import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tre-ac-gas',
  templateUrl: './ac-gas.component.html',
  styleUrls: ['./ac-gas.component.scss']
})
export class AcGasComponent implements OnInit {

  certificates = [
    { bgColor: '#1e4875', title: 'Fully Client Satisfaction', content: 'We always giving fully satisfaction to our all valuable customers.', img: 'https://aircoolsolutions.in/img/icon/award-1.png' },
    { bgColor: '#ca232a', title: 'Professional Workers', content: 'Indina Aircool is team of expert and experienced technicians.', img: 'https://aircoolsolutions.in/img/icon/award-2.png' },
    { bgColor: '#176bc4', title: 'Service Guarantee', content: 'We always provide 90 days service warranty without any condition.', img: 'https://aircoolsolutions.in/img/icon/award-3.png' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
