import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule, NgbAlertModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmojiModule, EmojiComponent } from '@ctrl/ngx-emoji-mart/ngx-emoji'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { lightbox2 } from 'lightbox2'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { TimeAgoExtPipe } from './time-ago-ext-pipe.pipe';
import { WrongComponent } from './wrong/wrong.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { PhotoComponent } from './profile/photo/photo.component';
import { VideoComponent } from './profile/video/video.component';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    ContactComponent,
    ChatBoxComponent,
    TimeAgoExtPipe,
    WrongComponent,
    HomeComponent,
    SearchComponent,
    ProfileComponent,
    PhotoComponent,
    VideoComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule, 
    NgbPaginationModule, 
    NgbAlertModule,
    HttpClientModule,
    CommonModule,
    PickerModule,
    EmojiModule,
    Ng2SearchPipeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
