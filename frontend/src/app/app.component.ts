import { Component, ViewChild,ElementRef } from '@angular/core';
import { ApiServiceService } from 'src/services';
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
  selectedUnit:any;
 
  constructor(private apiservice: ApiServiceService){}

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

  @ViewChild('myUnits') myUnit!: ElementRef ;
  
  
  OpenSel(){
    this.selectedUnit = this.myUnit;
    console.log( this.selectedUnit);
  }

   

}
