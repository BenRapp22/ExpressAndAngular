import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ImageViz';


  //filters 
  selectedYear: number = 2010;
  selectedHotelChain: string = '';
  selectedRoomType: string = '';
  selectedObject: string = '';

  getYear(event: any): number{
    this.selectedYear = event.target.value;
    console.log(this.selectedYear);
    return this.selectedYear;
  }

  getHotelChain(event: any): string{
    this.selectedHotelChain = event.target.value;
    console.log(this.selectedHotelChain);
    return this.selectedHotelChain;
  }

  getRoomType(event: any): string{
    this.selectedRoomType = event.target.value;
    console.log(this.selectedRoomType);
    return this.selectedRoomType;
  }

  getObject(event: any): string{
    this.selectedObject = event.target.value;
    console.log(this.selectedObject);
    return this.selectedObject;
  }


  //builder
  selectedXFeature: string = '';
  selectedYFeature: string = '';
  selectedType: string = '';

  getXFeature(event: any): string{
    this.selectedObject = event.target.value;
    console.log(this.selectedXFeature);
    return this.selectedXFeature;
  }
  
  getYFeature(event: any): string{
    this.selectedObject = event.target.value;
    console.log(this.selectedYFeature);
    return this.selectedYFeature;
  }

  getType(event: any): string{
    this.selectedObject = event.target.value;
    console.log(this.selectedType);
    return this.selectedType;
  }

  getVisualizationName(name: string): string{
    console.log("save as: " + name);
    return name;
  }
}