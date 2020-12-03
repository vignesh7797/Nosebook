import { Component, OnInit } from '@angular/core';
import { faHome, faSearch, faThLarge, faUser, faBell } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ChatBoxComponent } from '../chat-box/chat-box.component';
import { ContactService } from '../contact.service';
import { MessageService } from '../message.service';
import { SharedService } from '../shared.service';
import { Title } from '@angular/platform-browser';
import { Contact } from '../contact';

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
  url: string;

  constructor(
    private contactService: ContactService,
    private messageService: MessageService,
    private titleService: Title,
    private sharedService: SharedService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

 

  ngOnInit(): void {
    this.onClick(1);
    console.log(this.tab);

    this.url =this.router.url;
    console.log(this.url);

    if(this.url == '/blog'){
      this.tab ="tab1";
    } else if(this.url == '/search'){
      this.tab = "tab2";
    } else if(this.url == '/contacts'){
      this.tab = "tab3";
    } else if(this.url == '/notification'){
      this.tab = "tab4";
    } else if(this.url == '/profile'){
      this.tab = "tab5";
    } else {
      this.tab ="tab1";
    }
  }

  tab: any = "tab1";


  

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
