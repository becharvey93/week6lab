import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs'; 
import * as io from 'socket.io-client'; 

@Injectable({
    providedIn: 'root'
})
export class SocketService {
    private url = "http://localhost:3000"; 
    private socket; 
    constructor() { }
    sendMessage(message){
        this.socket.emit('add-message', message); 
    }
    getMessage(){
        let obmessages = new Observable(
            observer => {
                this.socket = io(); 
                this.socket.on('message', (data)=> {observer.next(data);});

                return ()=>{this.socket.disconnect();}
            }) 

        return obmessages; 
        }
    }
