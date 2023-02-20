import { Component } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'version';
  // observables
  constructor() {
    const test$ = new Observable(Subscriber => {
      console.log("Hi")
      Subscriber.next("1")
      Subscriber.next("2")
      Subscriber.next("3")
    });

    test$.subscribe(a => {
      console.log(a)
    })

    // map function

    const customers = [
      { id: 1, first_name: "harish", last_name: "a" },
      { id: 2, first_name: "abin", last_name: "b" },

      { id: 3, first_name: "madan", last_name: "c" }


    ]

    let details = customers.map(function (val) {
      let Fullname = [val.first_name, val.last_name].join(" ")
      let output = { ID: val.id, Fullname: Fullname }
      return output
    })

    console.log(details)
  }





}
