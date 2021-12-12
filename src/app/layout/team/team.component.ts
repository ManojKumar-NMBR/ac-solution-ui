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
      img: 'Charles-Shimer-min.jpg',
      about: [
        "<p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt ulpa qui officia deserunt mollit anim id est laborum. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in voluptate velit esse cillum dolore eu  fugiat nulla pariatur.</p>",
        "<p class='orange'>Excepteur sint occaecat <span class='underline'>cupidatat</span> non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in <span class='underline'>voluptate</span> velit esse cillum dolore eu fugiat nulla pariatur.</p>",
        "<p class='orange'>Excepteur sint occaecat <span class='underline'>cupidatat</span> non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in <span class='underline'>voluptate</span> velit esse cillum dolore eu fugiat nulla pariatur.</p>"
      ]
    },
    {
      userId: 2,
      name: 'Francis Wilson',
      img: 'Francis-Wilson-min.jpg',
      about: [
        "<p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt ulpa qui officia deserunt mollit anim id est laborum. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in voluptate velit esse cillum dolore eu  fugiat nulla pariatur.</p>",
        "<p class='orange'>Excepteur sint occaecat <span class='underline'>cupidatat</span> non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in <span class='underline'>voluptate</span> velit esse cillum dolore eu fugiat nulla pariatur.</p>",
        "<p class='orange'>Excepteur sint occaecat <span class='underline'>cupidatat</span> non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in <span class='underline'>voluptate</span> velit esse cillum dolore eu fugiat nulla pariatur.</p>"
      ]
    },
    {
      userId: 3,
      name: 'Gary Baxter',
      img: 'Gary-Baxter-min.jpg',
      about: [
        "<p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt ulpa qui officia deserunt mollit anim id est laborum. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in voluptate velit esse cillum dolore eu  fugiat nulla pariatur.</p>",
        "<p class='orange'>Excepteur sint occaecat <span class='underline'>cupidatat</span> non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in <span class='underline'>voluptate</span> velit esse cillum dolore eu fugiat nulla pariatur.</p>",
        "<p class='orange'>Excepteur sint occaecat <span class='underline'>cupidatat</span> non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in <span class='underline'>voluptate</span> velit esse cillum dolore eu fugiat nulla pariatur.</p>"
      ]
    },
    {
      userId: 4,
      name: 'Kanchit Tyagi',
      img: 'kanchit.png',
      about: [
        "<p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt ulpa qui officia deserunt mollit anim id est laborum. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in voluptate velit esse cillum dolore eu  fugiat nulla pariatur.</p>",
        "<p class='orange'>Excepteur sint occaecat <span class='underline'>cupidatat</span> non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in <span class='underline'>voluptate</span> velit esse cillum dolore eu fugiat nulla pariatur.</p>",
        "<p class='orange'>Excepteur sint occaecat <span class='underline'>cupidatat</span> non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in <span class='underline'>voluptate</span> velit esse cillum dolore eu fugiat nulla pariatur.</p>"
      ]
    },
    {
      userId: 5,
      name: 'Paul Hendrickson',
      img: 'Steven-Mays-min.jpg',
      about: [
        "<p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt ulpa qui officia deserunt mollit anim id est laborum. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in voluptate velit esse cillum dolore eu  fugiat nulla pariatur.</p>",
        "<p class='orange'>Excepteur sint occaecat <span class='underline'>cupidatat</span> non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in <span class='underline'>voluptate</span> velit esse cillum dolore eu fugiat nulla pariatur.</p>",
        "<p class='orange'>Excepteur sint occaecat <span class='underline'>cupidatat</span> non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in <span class='underline'>voluptate</span> velit esse cillum dolore eu fugiat nulla pariatur.</p>"
      ]
    },
    {
      userId: 6,
      name: 'Steven Mays',
      img: 'Paul-Hendrickson-min.jpg',
      about: [
        "<p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt ulpa qui officia deserunt mollit anim id est laborum. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in voluptate velit esse cillum dolore eu  fugiat nulla pariatur.</p>",
        "<p class='orange'>Excepteur sint occaecat <span class='underline'>cupidatat</span> non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in <span class='underline'>voluptate</span> velit esse cillum dolore eu fugiat nulla pariatur.</p>",
        "<p class='orange'>Excepteur sint occaecat <span class='underline'>cupidatat</span> non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. reprehenderit in <span class='underline'>voluptate</span> velit esse cillum dolore eu fugiat nulla pariatur.</p>"
      ]
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
    this.selectedUserInfo = this.userInfoData.find(d => d.userId == userId); // Object.assign({}, this.userInfoData.find(d => d.id = userId));
    this.displaySideBarFlag = true;
  }

}