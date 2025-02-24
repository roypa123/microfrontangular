import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

interface EventData {
  event: string;
  data: any;
}


@Injectable({
  providedIn: 'root'
})
export class EventBusService {


  private eventSubject = new Subject<EventData>();

  constructor() { }

  // Method to send an event
  sendEvent(event: string, data: any): void {
    console.log("Event sent:", event, data);
    this.eventSubject.next({ event, data });
  }

  // Method to get events as an observable
  getEvents(): Observable<EventData> {
    return this.eventSubject.asObservable();
  }

}
