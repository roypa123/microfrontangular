import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { EventBusService } from 'projects/shell/src/app/shared/event-bus.service';


@Component({
  selector: 'app-mfe2',
  templateUrl: './mfe2.component.html',
  styleUrls: ['./mfe2.component.scss']
})
export class Mfe2Component implements OnInit{
  receivedMessage = '';

  constructor(private eventBus: EventBusService, private cdRef: ChangeDetectorRef) { }

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


  // ngOnInit() {
  //   this.eventBus.getEvents().subscribe(data => {
  //     console.log('Received in MFE2:', data); // ✅ Data from MFE1 received here
  //   });
  // }

  ngOnInit() {
    this.eventBus.getEvents().subscribe(data => {
      if (data) {
        console.log('Received in MFE2:', data);
        // this.receivedData = data;
        this.cdRef.detectChanges(); // ✅ Force UI update
      }
    });
  }

  // ngAfterViewInit() { // ✅ Runs after view is initialized
  //   this.eventBus.getEvents().subscribe(data => {
  //     if (data) {
  //       console.log('Received in MFE2:', data);
  //       this.receivedMessage = data;
  //     }
  //   });
  // }

}
