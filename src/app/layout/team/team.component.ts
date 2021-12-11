import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tre-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  displaySideBarFlag = false;

  constructor() { }

  ngOnInit(): void { }

  displaySideBar() {
    this.displaySideBarFlag = true;
  }

}