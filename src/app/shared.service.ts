import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  appTitle = "NoseBook";
  baseUrl = "http://localhost:4200/";

  constructor() { }
}
