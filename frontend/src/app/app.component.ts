import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/services';
import oprations from 'src/operations';
import { AreaUnits, Figure, Unit } from './figures';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})

export class AppComponent implements OnInit{
  public title = 'frontend';
  public figures: Figure[] = [];
  public units: Unit[] = [];
  public selectedOperation: string = "";
  public selectedUnit:string  = "meter";
  public selectedUnit2:string  = "decimeter";
  public selectedFigure:string = "";

  
  constructor(private apiservice: ApiServiceService){}
 
  ngOnInit(): void {
    this.apiservice.getFigures().subscribe(figure => {
      this.figures=figure;
    })

    this.apiservice.getUnits().subscribe(unit => {
      this.units = unit;
    })

  }
  
  selectedOperations = oprations

  OpenSel(event:any){
    this.selectedUnit = event.value;
  }

  OpenSe(event:any){
    this.selectedUnit2 = event.value;
  }
  OpenSelect(event:any){
    this.selectedFigure = event.target.value;
  }
  
  OpenSelectOperation(event:any){
    this.selectedOperation= event.target.value ;
    
  }

}


