import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '' , component:BlogComponent},
  {path: 'contacts' , component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
