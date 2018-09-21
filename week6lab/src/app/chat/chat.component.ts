import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';
import { Router } from '@angular/router'; 
import { CommonModule } from "@angular/common"; 
import { BrowserModule } from '@angular/platform-browser'; 

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {
  username:string; 
  messages=[];
  message;
  connection; 
  constructor(private sockServ: SocketService, private router:Router) { }

  ngOnInit() {
    if(!sessionStorage.getItem('username')){
      console.log('Not Validated'); 
      sessionStorage.clear(); 
      alert("Not a valid user");
      this.router.navigateByUrl('login');        
    }else{
      this.username = sessionStorage.getItem('username');
      console.log("Session started for: " + this.username);
      this.connection = this.sockServ.getMessage().subscribe(message=>{
        this.messages.push(message);
        this.message = '';
      });
    }
  }

  sendMessage(){
    this.sockServ.sendMessage(this.message + ' ('+this.username+')');
  }

  ngOnDestory(){
    if (this.connection){
      this.connection.unsubscribe(); 
    }
  }

  logout(){
    sessionStorage.cleaar(); 
    console.log('Session Cleared'); 
    this.router.navigateByUrl('login');
  }
  

}
