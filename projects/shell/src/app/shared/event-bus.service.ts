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
  // private eventSubject = new Subject<{ event: string, data: any }>();

  //private eventSubject = new BehaviorSubject<any>(null); //

  private eventSubject = new Subject<EventData>();

  constructor() { }

  // sendEvent(event: string, data: any) {
  //   console.log("hello");
  //   console.log("Event sent:", data);

  //   //this.eventSubject.next({ event, data });

  //   this.eventSubject.next(data);
  // }

  // getEvents() {
  //   return this.eventSubject.asObservable();
  // }

  // emitEvent(data: any) {
  //   console.log(data);
  //   this.eventSubject.next(data);
  // }

  // getEvents(): Observable<any> {
  //   return this.eventSubject.asObservable();
  // }

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
