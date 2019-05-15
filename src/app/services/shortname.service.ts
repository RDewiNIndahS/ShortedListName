import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShortnameService {

  constructor(public http : Http) { }

  urlEncoded = 'assets/unsorted-names-list.txt';
  getText(){
    return Observable.create(observer => {
    return this.http.get(this.urlEncoded).subscribe(
      data => {
      observer.next(data);
      observer.complete();
    });
  })
}
}
