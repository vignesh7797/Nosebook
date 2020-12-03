import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  
  
   img = document.getElementById("Img")

  constructor() { }

  ngOnInit(): void {
    this.onClick(1);
  }

  tab: any = "tab1";

  onClick(check) {
    if (check == 1) {
      this.tab = "tab1";
    } else {
      this.tab = "tab2";
    }
  }

}
