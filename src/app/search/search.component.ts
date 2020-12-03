import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  contacts: Contact[]=[];
  user=faUserCircle;
  search = faSearch;
  term:string;

  constructor(
    private contactService: ContactService,
    private titleService: Title,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    
  }

  getContacts(): void{
    this.contactService.getContacts().subscribe(contacts => (this.contacts = contacts));
  }

  showContact(){
    var empty = document.getElementById('empty');
    
    if(this.term != '' && this.term != null){

      empty.style.display = "none";

      this.getContacts();
      
    } else{
      empty.style.display = "block";
    }
  }

}
