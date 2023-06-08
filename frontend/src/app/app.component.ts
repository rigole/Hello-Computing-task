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
  selectedUnit:string;
  selectedFigure:string;
  
 
  constructor(private apiservice: ApiServiceService){
    this.selectedUnit = "meter";
    this.selectedFigure = "rectangle"
  }

  ngOnInit(): void {
    this.apiservice.getFigures().subscribe(res => {
      this.figures=res;
    })

    this.apiservice.getUnits().subscribe(res => {
      this.units = res;
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

   

}
