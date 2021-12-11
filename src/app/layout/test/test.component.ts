import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'tre-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  host: {
    // "(window:click)": "onClick()"
  }
})
export class TestComponent implements OnInit {

  display = false;
  visibleSidebar2: boolean;

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  openDisplay() {
    this.visibleSidebar2 = true;
    /* setTimeout(() => {
      this.display = true
    }, 250); */
  }

  onClick() {
    this.visibleSidebar2 = true;
    /* if (this.display)
      this.display = false; */
  }

  test() {
    debugger
    console.log(this.visibleSidebar2)
  }

}
