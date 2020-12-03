import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router'
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  contact: Contact = new Contact();

  constructor() { }

  ngOnInit(): void {  }

}
