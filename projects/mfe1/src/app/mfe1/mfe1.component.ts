import { Component, OnInit } from '@angular/core';
import { EventBusService } from 'projects/shell/src/app/shared/event-bus.service';


@Component({
  selector: 'app-mfe1',
  templateUrl: './mfe1.component.html',
  styleUrls: ['./mfe1.component.scss']
})
export class Mfe1Component implements OnInit {

  constructor(private eventBus: EventBusService) { }

  ngOnInit(): void {
  }

  sendMessage() {
    //this.eventBus.sendEvent('message', 'Hello from MFE1!');

    this.eventBus.emitEvent({ message: 'Hello from MFE1' });
  }

}
