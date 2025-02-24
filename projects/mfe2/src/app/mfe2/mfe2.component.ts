import { Component, OnInit, AfterViewInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { EventBusService } from 'projects/shell/src/app/shared/event-bus.service';



@Component({
  selector: 'app-mfe2',
  templateUrl: './mfe2.component.html',
  styleUrls: ['./mfe2.component.scss']
})
export class Mfe2Component implements OnInit{
  receivedMessage = '';

  constructor(private eventBus: EventBusService, private ngZone: NgZone) { }

  ngOnInit() {
    this.ngZone.run(() => {
      this.eventBus.getEvents().subscribe((eventData) => {
        console.log("Event received:", event);
        // Handle the event here
      });
    });



    // setTimeout(() => {
    //   this.eventBus.getEvents().subscribe(eventData => {
    //     console.log('Event received:', eventData);
    //     this.receivedMessage = eventData.data;
    //   });
    // }, 0);
  }


}
