import { Component, OnInit } from '@angular/core';
import { GraphDataService } from '../graph-data.service';


@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  constructor(private graphService: GraphDataService) { }


  ngOnInit(): void {
  }

  getXFeature(event: any): string{
    console.log(event.target.value);
    return event.target.value;
  }
  
  getYFeature(event: any): string{
    console.log(event.target.value);
    return event.target.value;
  }

  getType(event: any): string{
    console.log(event.target.value);
    return event.target.value;
  }

  getVisualizationName(name: string): string{
    console.log("save as: " + name);
    return name;
  }
  

}
