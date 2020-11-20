import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { CONTACTS } from '../mock-list';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
import { Title } from '@angular/platform-browser';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: Contact[]=[];
  user=faUserCircle;

  constructor(
    private contactService: ContactService,
    private titleService: Title,
    private sharedService: SharedService
    ) { }


  ngOnInit(): void {
    this.titleService.setTitle(`${this.sharedService.appTitle}`);
    this.getContacts();
  }

  getContacts(): void{
    this.contactService.getContacts().subscribe(contacts => (this.contacts = contacts));
  }

}
