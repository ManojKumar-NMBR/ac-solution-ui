import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tre-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  displaySideBarFlag = false;
  selectedUserInfo: any;

  userInfoData = [
    {
      userId: 1,
      name: 'Charles Shimer',
      img: 'Charles-Shimer-min.jpg'
    },
    {
      userId: 2,
      name: 'Francis Wilson',
      img: 'Francis-Wilson-min.jpg'
    },
    {
      userId: 3,
      name: 'Gary Baxter',
      img: 'Gary-Baxter-min.jpg'
    },
    {
      userId: 4,
      name: 'Kanchit Tyagi',
      img: 'kanchit.png'
    },
    {
      userId: 5,
      name: 'Paul Hendrickson',
      img: 'Steven-Mays-min.jpg'
    },
    {
      userId: 6,
      name: 'Steven Mays',
      img: 'Paul-Hendrickson-min.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void { }

  test() {
    debugger
    console.log(this.userInfoData)
  }

  displayUserInfoSideBar(userId: number) {
    this.selectedUserInfo = null;
    this.selectedUserInfo = this.userInfoData.filter(d => d.userId == userId); // Object.assign({}, this.userInfoData.find(d => d.id = userId));
    setTimeout(() => {
      this.displaySideBarFlag = true;
    }, 1000);
  }

}