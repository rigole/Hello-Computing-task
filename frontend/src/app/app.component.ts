import { Component, ViewChild,ElementRef } from '@angular/core';
import { ApiServiceService } from 'src/services';
import { FormGroup } from '@angular/forms';
import { MatSelect } from '@angular/material/select';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})



export class AppComponent {
 
  title = 'frontend';
  figures:any;
  units:any;
  unitsArea:any;
  selectedUnit:string;
  selectedFigure:string;
  selectedAreaUnit: string;
  
 
  constructor(private apiservice: ApiServiceService){
    this.selectedUnit = "meter";
    this.selectedFigure = "rectangle"
    this.selectedAreaUnit = "meter square"
  }

  ngOnInit(): void {
    this.apiservice.getFigures().subscribe(res => {
      this.figures=res;
    })

    this.apiservice.getUnits().subscribe(res => {
      this.units = res;
    })

    this.apiservice.getAreaUnits().subscribe(res => {
      this.unitsArea = res;
    })

    

    

    
  }
  
   oprations = [
    {id: 0, name: 'Area'},
    {id: 1, name: 'Perimeter'},
   
  ];

   selectedOperations = this.oprations[1]; 


  
  
  OpenSel(event:any){
    this.selectedUnit = event.value;
    console.log(this.selectedUnit);


  }

  OpenSelect(event:any){
    this.selectedFigure = event.value;
  }

  OpenSelectArea(event:any){
    this.selectedAreaUnit = event.value
  }

   

}
