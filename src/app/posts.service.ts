import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { POSTS } from './mock-post';
import { CONTACTS } from './mock-list';
import { post } from './post';
import { Contact } from './contact';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<post[]>{
    const posts: post[] = POSTS;
    return of(posts);
  }

  getPost(user_name:string): Observable<post> {
    const posts: post[] = POSTS.filter(a => a.user_name === user_name);
    return of(posts[0]);

  }

}
