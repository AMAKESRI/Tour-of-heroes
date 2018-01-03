import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {


  // messageService property should be public to bind to it in the template
  constructor(public messageService : MessageService) { }

  ngOnInit() {
  }

}
