import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { ChatComponent } from './chat/chat.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [

  {path:'login', component:LoginComponent}, 
  {path:'chat', component:ChatComponent},
  {path:'404', component:NotfoundComponent},
  {path:'**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
