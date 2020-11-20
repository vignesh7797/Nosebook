import { Component, OnInit } from '@angular/core';
import { faHome, faSearch, faThLarge, faUser, faBell } from '@fortawesome/free-solid-svg-icons';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //Icon Declaration
  home=faHome;
  search=faSearch;
  grid=faThLarge;
  profile=faUser;
  bell=faBell;

  active = 'home';

  constructor() { }

  ngOnInit(): void {
  }

  tab: any = "tab1";
  tab1: any;
  tab2: any;
  tab3: any;

  onClick(check) {
    console.log(check);
    if (check == 1) {
      this.tab = "tab1";
    } else if (check == 2) {
      this.tab = "tab2";
    } else if (check == 3) {
      this.tab = "tab3";
    } else if (check == 4) {
      this.tab = "tab4";
    } else {
      this.tab = "tab5";
    }
  }

}
