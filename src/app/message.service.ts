import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  dataList:any[]=[];

  constructor(private http: HttpClient) { }

  insertData(msg: ChatBoxComponent){
    this.dataList.push({
      send_msg: msg.message,
      send_time: new Date()
    });
    return this.dataList;
  }
}
