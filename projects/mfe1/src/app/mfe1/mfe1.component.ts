import { Component, OnInit } from '@angular/core';
import { EventBusService } from 'projects/shell/src/app/shared/event-bus.service';



@Component({
  selector: 'app-mfe1',
  templateUrl: './mfe1.component.html',
  styleUrls: ['./mfe1.component.scss']
})
export class Mfe1Component implements OnInit {

  receivedMessage = '';

  constructor(private eventBus: EventBusService) { }



  ngOnInit() {
    // setTimeout(() => {
    //   this.eventBus.getEvents().subscribe(eventData => {
    //     console.log('Event received:', eventData);
    //     this.receivedMessage = eventData.data;
    //   });
    // }, 0);
  }

  sendMessage() {


    this.eventBus.sendEvent("message","hi from ");
  }

}
