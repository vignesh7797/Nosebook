import { Component, NgZone, ViewChild } from '@angular/core';
import { from } from 'rxjs';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Contact } from './contact';
import { ContactService } from './contact.service';
import { SharedService } from './shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'nosebook';

  user_name:any;
  showHead:boolean = true;
  url:any;

  contact: Contact = new Contact();
          

  constructor(){  }
  



 
  


}
