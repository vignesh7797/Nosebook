import { Component, OnInit } from '@angular/core';
import { faHeart, faCommentAlt, faShare } from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';

import { PostsService } from '../posts.service';
import { SharedService } from '../shared.service';
import { ContactService } from '../contact.service';

import { post } from '../post';
import { Contact } from '../contact';
import { POSTS } from '../mock-post';
import { CommonModule } from '@angular/common';
import { CONTACTS } from '../mock-list';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  heart=faHeart;
  comment=faCommentAlt;
  share=faShare;

  like:boolean =false;
  count: number = 0;

  i:number;

  posts: post[] = [];
  contacts: Contact[]=[];

  constructor(
    private contactService: ContactService,
    private postsService: PostsService,
    private titleService: Title,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(`${this.sharedService.appTitle}`);
    this.getContacts();
    this.getPosts();
  }

  onLike(){
    this.like = ! this.like;
    if(this.like){ this.count++ } else this.count-- ;
  }

 

  getContacts(): void{
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
      return this.contacts;
    });
    
    // console.log(this.contacts[0].user_name);
    // if(this.posts[0].user_name == this.contacts[0].user_name){
    //   console.log(this.contacts[0].dp);
    // }
  }

  getPosts(): void{
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
      return this.posts;
    });

    console.log(this.posts[1].user_name);
    if(this.posts[1].user_name == this.contacts[1].user_name){
      console.log(this.contacts[1].dp);
    }
    
  }


 

}
