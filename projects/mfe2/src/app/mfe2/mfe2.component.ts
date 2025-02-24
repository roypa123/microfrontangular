import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { EventBusService } from 'projects/shell/src/app/shared/event-bus.service';



@Component({
  selector: 'app-mfe2',
  templateUrl: './mfe2.component.html',
  styleUrls: ['./mfe2.component.scss']
})
export class Mfe2Component implements OnInit{
  receivedMessage = '';

  constructor(private eventBus: EventBusService) { }

  // ngOnInit() {
  //   this.receivedMessage = "ddd"
  //   this.eventBus.getEvents().subscribe(data => {
  //     console.log("manu");
  //     // console.log(event)
  //     // if (event.event === 'message') {
  //     //   console.log('MFE2 received:', event.data); // Debugging
  //     //   this.receivedMessage = event.data;
  //     // }
  //   });
  // }




  ngOnInit() {
    setTimeout(() => {
      this.eventBus.getEvents().subscribe(eventData => {
        console.log('Event received:', eventData);
        this.receivedMessage = eventData.data;
      });
    }, 0);
  }


}
