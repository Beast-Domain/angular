import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  title = "New Server";
  count = 0;
  constructor() { }

  ngOnInit(): void {
  }

  myfunc() {
    this.count++;
  }

  createRange(number) {
    var items: number[] = [];
    for(var i=1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

}
