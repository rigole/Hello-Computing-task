import { Component } from '@angular/core';
import { ApiServiceService } from 'src/services';
import oprations from 'src/operations';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})


export class RectangleComponent  {
  figures:any;
  units:any;
  unitsArea:any;

  inSubmission = false

  length = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(0),
    Validators.max(9999)
  ])

  width = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(0),
    Validators.max(9999)
  ])



  rectangleForm = new FormGroup({
    length: this.length,
    width: this.width
  })

  
  selectedOperations = oprations
  selectedOperation = oprations[1];
  selectedUnit:string;
  selectedUnit2:string;
  selectedFigure:string;
  selectedAreaUnit: string;
  selectedAreaUnit2: string;
  
  constructor(private apiservice: ApiServiceService){
    
    this.selectedUnit = "meter";
    this.selectedUnit2 = "decimeter";
    this.selectedFigure = "rectangle"
    this.selectedAreaUnit = "meter square"
    this.selectedAreaUnit2 = "decimeter square"
  
  }
  ngOnInit(): void {
   
  }

  
  

//Conversion on Rectangle Operations 

ConversionRectangle(){
  /*
  const rectangleNumber = Number(this.RectangleCalculus()) ;
  const convertedRectangleValue = <HTMLInputElement>document.getElementById("convertedRectangleValue");
  if(isNaN(rectangleNumber)){
    convertedRectangleValue.style.color = "red";
    convertedRectangleValue.style.fontFamily = "Comfortaa";
    return "You need to calculate area or perimeter before converting";
  }
  else{
    convertedRectangleValue.style.color = "green";
    convertedRectangleValue.style.fontFamily = "Comfortaa";
      if( this.appComponent.selectedOperation.name == "Perimeter"){
        
        if(this.appComponent.selectedUnit == "meter" && this.appComponent.selectedUnit2 =="meter"){
          return rectangleNumber + " meters";
        }
        else if (this.appComponent.selectedUnit == "meter" && this.appComponent.selectedUnit2 =="decimeter"){
          return rectangleNumber * 10 + " decimeters";
        }
        else if (this.appComponent.selectedUnit == "meter" && this.appComponent.selectedUnit2 =="centimeter" ){
          return rectangleNumber * 100 + " centimeters";
        }
        else if (this.appComponent.selectedUnit == "meter" && this.appComponent.selectedUnit2 =="kilometer" ){
          return rectangleNumber / 1000 + " kilometers";
        } 
        else if (this.appComponent.selectedUnit == "centimeter" && this.appComponent.selectedUnit2 =="meter" ){
          return rectangleNumber / 100 + " meters";
        }
        else if (this.appComponent.selectedUnit == "centimeter" && this.appComponent.selectedUnit2 =="decimeter" ){
          return rectangleNumber / 10 + " decimeters";
        }
        else if (this.appComponent.selectedUnit == "centimeter" && this.appComponent.selectedUnit2 =="centimeter" ){
          return rectangleNumber * 100 + " centimeters";
        }
        else if (this.appComponent.selectedUnit == "centimeter" && this.appComponent.selectedUnit2 =="kilometer" ){
          return rectangleNumber / 100000 + " kilometers";
        }
        else if (this.appComponent.selectedUnit == "decimeter" && this.appComponent.selectedUnit2 =="meter" ){
          return rectangleNumber / 10 + " meters";
        }
        else if (this.appComponent.selectedUnit == "decimeter" && this.appComponent.selectedUnit2 =="centimeter" ){
          return rectangleNumber * 10 + " centimeters";
        }
        else if (this.appComponent.selectedUnit == "decimeter" && this.appComponent.selectedUnit2 =="kilometer" ){
          return rectangleNumber / 10000 + " kilometers";
        }
        else if (this.appComponent.selectedUnit == "decimeter" && this.appComponent.selectedUnit2 =="decimeter" ){
          return rectangleNumber * 10 + " decimeters";
        }
        else if (this.appComponent.selectedUnit == "kilometer" && this.appComponent.selectedUnit2 =="meter" ){
          return rectangleNumber * 1000 + " meters";
        }
        else if (this.appComponent.selectedUnit == "kilometer" && this.appComponent.selectedUnit2 =="centimeter" ){
          return rectangleNumber * 100000 + " centimeters";
        }
        else if (this.appComponent.selectedUnit == "kilometer" && this.appComponent.selectedUnit2 =="decimeter" ){
          return rectangleNumber * 10000 + " decimeters";
        }
        else if (this.appComponent.selectedUnit == "kilometer" && this.appComponent.selectedUnit2 =="kilometer" ){
          return rectangleNumber / 1000 + " kilometers";
        }
        else{
          return rectangleNumber;
        }
      } else{
        if(this.appComponent.selectedAreaUnit == "meter square" && this.appComponent.selectedAreaUnit2 =="meter square"){
          return rectangleNumber + " meters square";
        }
        else if (this.appComponent.selectedAreaUnit == "meter square" && this.appComponent.selectedAreaUnit2 =="decimeter square"){
          return rectangleNumber * 100 + " decimeters square";
        }
        else if (this.appComponent.selectedAreaUnit == "meter square" && this.appComponent.selectedAreaUnit2 =="centimeter square" ){
          return rectangleNumber * 10000 + " centimeters square";
        }
        else if (this.appComponent.selectedAreaUnit == "meter square" && this.appComponent.selectedAreaUnit2 =="kilometer square" ){
          return rectangleNumber / 1000000 + " kilometers square";
        } 
        else if (this.appComponent.selectedAreaUnit == "centimeter square" && this.appComponent.selectedAreaUnit2 =="meter square" ){
          return rectangleNumber / 10000 + " meters square";
        }
        else if (this.appComponent.selectedAreaUnit == "centimeter square" && this.appComponent.selectedAreaUnit2 =="decimeter square" ){
          return rectangleNumber / 10 + " decimeters square";
        }
        else if (this.appComponent.selectedAreaUnit == "centimeter square" && this.appComponent.selectedAreaUnit2 =="centimeter square" ){
          return rectangleNumber * 10000 + " centimeters square";
        }
        else if (this.appComponent.selectedAreaUnit == "centimeter square" && this.appComponent.selectedAreaUnit2 =="kilometer square" ){
          return rectangleNumber / 10000000 + " kilometers square";
        }
        else if (this.appComponent.selectedAreaUnit == "decimeter square" && this.appComponent.selectedAreaUnit2 =="meter square" ){
          return rectangleNumber / 100 + " meters square";
        }
        else if (this.appComponent.selectedAreaUnit == "decimeter square" && this.appComponent.selectedAreaUnit2 =="centimeter square" ){
          return rectangleNumber * 100 + " centimeters square";
        }
        else if (this.appComponent.selectedAreaUnit == "decimeter square" && this.appComponent.selectedAreaUnit2 =="kilometer square" ){
          return rectangleNumber / 100000000 + " kilometers square";
        }
        else if (this.appComponent.selectedAreaUnit == "decimeter square" && this.appComponent.selectedAreaUnit2 =="decimeter square" ){
          return rectangleNumber * 100 + " decimeters square";
        }
        else if (this.appComponent.selectedAreaUnit == "kilometer square" && this.appComponent.selectedAreaUnit2 =="meter square" ){
          return rectangleNumber * 1000000 + " meters square";
        }
        else if (this.appComponent.selectedAreaUnit == "kilometer square" && this.appComponent.selectedAreaUnit2 =="centimeter square" ){
          return rectangleNumber * 10000000 + " centimeters square";
        }
        else if (this.appComponent.selectedAreaUnit == "kilometer square" && this.appComponent.selectedAreaUnit2 =="decimeter square" ){
          return rectangleNumber * 10000 + " decimeters square";
        }
        else if (this.appComponent.selectedAreaUnit == "kilometer square" && this.appComponent.selectedAreaUnit2 =="kilometer square" ){
          return rectangleNumber / 1000000 + " kilometers square";
        }
        else{
          return rectangleNumber;
        }
      }

  }
*/
}

 RectangleCalculus(){
  /*
 console.log(this.length.value
  )
 console.log(this.width.value)
 */
}




}
