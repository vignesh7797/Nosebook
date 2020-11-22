import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Contact } from './contact';
import { CONTACTS } from './mock-list';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]>{
     const contacts: Contact[] = CONTACTS;
     return of(contacts);
  }

  getContact(user_name:string): Observable<Contact> {
     const contacts: Contact[] = CONTACTS.filter(a => a.user_name === user_name);
     return of(contacts[0]);
   }
}
