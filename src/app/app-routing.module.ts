import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { BlogComponent } from './blog/blog.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
import { PhotoComponent } from './profile/photo/photo.component';
import { ProfileComponent } from './profile/profile.component';
import { VideoComponent } from './profile/video/video.component';
import { SearchComponent } from './search/search.component';
import { WrongComponent } from './wrong/wrong.component';

const routes: Routes = [
  {path: '' , 
  component:HomeComponent , 
  children:[
    {path: '' , component:BlogComponent, pathMatch: 'full'},
    {path: 'contacts' , component:ContactComponent},
    {path: 'search' , component:SearchComponent},
    {path: 'notification', component:NotificationComponent},
    {path: 'profile' , component:ProfileComponent,
    children:[
      {path: 'photo', component:PhotoComponent},
      {path: 'video', component:VideoComponent, pathMatch: 'full'},
      {path: '', component:PhotoComponent}
    ]
  },

]},
  {path: ':user_name', component:ChatBoxComponent},
  {path: 'Not_Found', component:WrongComponent},
  { path: '**', component: WrongComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
