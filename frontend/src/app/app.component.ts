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
  length: string;
  width:string;
  side: string;
  radius: string;
  base: string;
  height: string;
  firstSide: string;
  secondSide: string;
  thirdSide : string;

  
 
  constructor(private apiservice: ApiServiceService){
    this.selectedUnit = "meter";
    this.selectedFigure = "rectangle"
    this.selectedAreaUnit = "meter square"
    this.length = "";
    this.width = "";
    this.side = "";
    this.radius = "";
    this.base = "";
    this.height = "";
    this.firstSide = "";
    this.secondSide = "";
    this.thirdSide = "";

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

  submission(event:any){}
  TrianglePerimeterCalculus(){
    this.firstSide = (<HTMLInputElement>document.getElementById("firstside")).value;
    this.secondSide = (<HTMLInputElement>document.getElementById("secondside")).value;
    this.thirdSide= (<HTMLInputElement>document.getElementById("thirdside")).value;

    const firstSideNumber = Number( this.firstSide);
    const secondSideNumber = Number(this.secondSide);
    const thirdSideNumber = Number(this.thirdSide);

    if(this.firstSide == "" ||  this.secondSide =="" || this.thirdSide=="" || isNaN(firstSideNumber) || isNaN(secondSideNumber) || isNaN(thirdSideNumber)){
      return "please insert a number for each side";
   } else {
          if(firstSideNumber == 0 || secondSideNumber == 0 || thirdSideNumber == 0  ||  firstSideNumber < 0 || secondSideNumber < 0 || thirdSideNumber < 0){
            return " A side cannot be negative or equal to 0";
          }
          else{
            return firstSideNumber + secondSideNumber + thirdSideNumber;
          }          
      }  
  }

  

  TriangleAreaCalculus(){
    this.base = (<HTMLInputElement>document.getElementById("base")).value;
    this.height = (<HTMLInputElement>document.getElementById("height")).value;
    const baseNumber = Number(this.base);
    const heightNumber = Number(this.height);

    if(this.base == "" || this.height =="" || isNaN(baseNumber) || isNaN(heightNumber)){
      return "please insert a number for base and a number for height";
   } else {
          if(baseNumber == 0 || heightNumber == 0 || baseNumber < 0 || heightNumber < 0){
            return " the with and the length cannot be negative or equal to 0";
          }
          else{
            return baseNumber * heightNumber;
          }          
      }  
  }

  CircleCalculus(){
    this.radius = (<HTMLInputElement>document.getElementById("radius")).value;
    
    const radiusNumber = Number(this.radius);
    if (this.radius == "" || isNaN(radiusNumber)) {
      return "Please insert a number for side"
    } else {
        if (this.selectedOperations.name == "Area") {
          if (radiusNumber == 0 || radiusNumber < 0) {
            return " the side cannot be negative or equal to 0";
          } else {
            return (2 * radiusNumber * Math.PI);
          }
        } else {
          if(radiusNumber == 0 || radiusNumber < 0){
            return " the with and the length cannot be negative or equal to 0";
          }
          else{
            return (radiusNumber * radiusNumber * Math.PI);
          }
        }
    }
  }
  

  SquareCalculus(){
    this.side = (<HTMLInputElement>document.getElementById("side")).value;

    const sideNumber = Number(this.side);
    if (this.side == "" || isNaN(sideNumber)) {
      return "Please insert a number for side"
    } else {
        if (this.selectedOperations.name == "Area") {
          if (sideNumber == 0 || sideNumber < 0) {
            return " the side cannot be negative or equal to 0";
          } else {
            return sideNumber * sideNumber;
          }
        } else {
          if(sideNumber == 0 || sideNumber < 0){
            return " the with and the length cannot be negative or equal to 0";
          }
          else{
            return sideNumber * 4;
          }
        }
    }
  }
  
  RectangleCalculus(){
    this.length = (<HTMLInputElement>document.getElementById("length")).value;
    this.width = (<HTMLInputElement>document.getElementById("width")).value;
    const widthNumber = Number(this.width);
    const lengthNumber = Number(this.length);
   
   if(this.length == "" || this.width =="" || isNaN(widthNumber) || isNaN(lengthNumber)){
      return "please insert a number for width and a number for length";
   } else {
        if(this.selectedOperations.name == "Area"){
          if(widthNumber == 0 || lengthNumber == 0 || widthNumber < 0 || lengthNumber < 0){
            return " the with and the length cannot be negative or equal to 0";
          }
          else{
            return widthNumber * lengthNumber;
          }
                  
        } else{
          if(widthNumber == 0 || lengthNumber == 0 || widthNumber < 0 || lengthNumber < 0){
            return " the with and the length cannot be negative or equal to 0";
          }
          else{
            return (widthNumber + lengthNumber) * 2;
          }
      }
    }  
  }

  OpenSelect(event:any){
    this.selectedFigure = event.value;
  }

  OpenSelectArea(event:any){
    this.selectedAreaUnit = event.value
  }

   

}
