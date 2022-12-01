import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  query:string="";
  @Output() onNewQuery: EventEmitter<string>= new EventEmitter();
  busqueda(){
    this.onNewQuery.emit(this.query)
    this.query="";
  }
}
