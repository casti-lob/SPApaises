import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/searchCountry.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()  result:Country[]=[]
}
