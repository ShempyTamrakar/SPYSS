import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from 'src/data/data';
import { Event } from 'src/data/event';
import { Yoga} from 'src/data/yoga';
import { baseUrl } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient:HttpClient) { }
getfilter():Observable<any>{
  return this.httpClient.get<Data[]>(`${baseUrl}BranchRepo1`);
}

  //All Url for Branchreport 5 panels start 
   
  getBranchRepo1(): Observable<Data[]> {
    return this.httpClient.get<Data[]>(`${baseUrl}BranchRepo1`);
   }
   getBranchRepo2(): Observable<Data[]> {
    return this.httpClient.get<Data[]>(`${baseUrl}BranchRepo2`);
   }
   getBranchRepo3(): Observable<Data[]> {
    return this.httpClient.get<Data[]>(`${baseUrl}BranchRepo3`);
   }
   getBranchRepo4(): Observable<Data[]> {
    return this.httpClient.get<Data[]>(`${baseUrl}BranchRepo4`);
   }
   getBranchRepo5(): Observable<Data[]> {
    return this.httpClient.get<Data[]>(`${baseUrl}BranchRepo5`);
   }
  //All Url for Branchreport 5 panels end

  //All Url for EventReport 3 panels start

  getEventRepo1():Observable<Event[]>{
    return this.httpClient.get<Event[]>(`${baseUrl}EventRepo`);
  }
  getEventRepo2():Observable<Event[]>{
    return this.httpClient.get<Event[]>(`${baseUrl}EventRepo2`);
  }
  getEventRepo3():Observable<Event[]>{
    return this.httpClient.get<Event[]>(`${baseUrl}EventRepo3`);
  }
  //All Url for EventReport 3 panels end

  //All Url for yogaBandhuReport 4 panels start

  getYogaRepo1():Observable<Yoga[]>{
    return this.httpClient.get<Yoga[]>(`${baseUrl}YogaRepo`);
  }
  getYogaRepo2():Observable<Yoga[]>{
    return this.httpClient.get<Yoga[]>(`${baseUrl}YogaRepo1`);
  }
  getYogaRepo3():Observable<Yoga[]>{
    return this.httpClient.get<Yoga[]>(`${baseUrl}YogaRepo2`);
  }
  getYogaRepo4():Observable<Yoga[]>{
    return this.httpClient.get<Yoga[]>(`${baseUrl}YogaRepo3`);
  }
  // //All Url for EventReport 3 panels end
}
