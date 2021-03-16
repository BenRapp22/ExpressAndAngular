import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  getYear(event: any): number {
    console.log(event.target.value);
    return event.target.value;
  }

  getHotelChain(event: any) : string{
    console.log(event.target.value);
    return event.target.value;
  }

  getRoomType(event: any): string {
    console.log(event.target.value);
    return event.target.value;
  }

  getObject(event: any): string {
    console.log(event.target.value);
    return event.target.value;
  }
}
