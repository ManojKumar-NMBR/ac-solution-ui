import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var currObj : any;

@Component({
  selector: 'tre-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})

export class TeamComponent implements OnInit {

    constructor() { }

    currObj = this;
    ngOnInit(): void {
      
      jQuery(document).ready(function() {	
        jQuery(".profile-photo, .name").click(function() {
          debugger
          jQuery(document).closest("div").find(".popup-outer").fadeIn();
        });
      
      
        jQuery(".ui-close").click(function() {
          debugger
          jQuery(document).parents("div").find(".popup-outer").fadeOut();
        });
      
      
      });

      }
}