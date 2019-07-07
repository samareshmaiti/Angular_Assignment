import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
   // observable string source
  private source = new Subject< String >();
  private source2 = new Subject< String >();
 // obsrvable string stream
  sourceConfirmed$ = this.source.asObservable();
  source2Confirmed$ = this.source2.asObservable();
// service message command
announcedService(service1:String)
{
  this.source.next(service1);
}
announcedService2(service3:String)
{
  this.source.next(service3);
}
  constructor() { }
}
