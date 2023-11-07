import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() { }
  messages: String[] = [];

  add(ms: string){
    this.messages.push(ms);
  }

  clear(){
    this.messages = [];
  }

}
