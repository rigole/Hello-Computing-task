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
  selectedUnit2:string;
  selectedFigure:string;
  selectedAreaUnit: string;
  selectedAreaUnit2: string;
  length: string;
  width:string;
  side: string;
  radius: string;
  base: string;
  height: string;
  firstSide: string;
  secondSide: string;
  thirdSide : string;
  rectangleValue:string;

  
 
  constructor(private apiservice: ApiServiceService){
    this.selectedUnit = "meter";
    this.selectedUnit2 = "decimeter";
    this.selectedFigure = "rectangle"
    this.selectedAreaUnit = "meter square"
    this.selectedAreaUnit2 = "decimeter square"
    this.length = "";
    this.width = "";
    this.side = "";
    this.radius = "";
    this.base = "";
    this.height = "";
    this.firstSide = "";
    this.secondSide = "";
    this.thirdSide = "";
    this.rectangleValue = "";

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
  }


  OpenSe(event:any){
    this.selectedUnit2 = event.value;
  }

  OpenSelectArea(event:any){
    this.selectedAreaUnit = event.value
  }

  OpenSelectArea_(event:any){
    this.selectedAreaUnit2 = event.value
  }
  
  ConversionSquare(){
    const squareNumber = Number(this.SquareCalculus()) ;
    const convertedSquareValue = <HTMLInputElement>document.getElementById("convertedSquareValue");
    if(isNaN(squareNumber)){
      convertedSquareValue.style.color = "red";
      convertedSquareValue.style.fontFamily = "Comfortaa";
      return "You need to calculate area or perimeter before converting";
    }  else{
      convertedSquareValue.style.color = "green";
      convertedSquareValue.style.fontFamily = "Comfortaa";
        if(this.selectedOperations.name == "Perimeter"){
          if(this.selectedUnit == "meter" && this.selectedUnit2 =="meter"){
            return squareNumber + " meters";
          }
          else if (this.selectedUnit == "meter" && this.selectedUnit2 =="decimeter"){
            return squareNumber * 10 + " decimeters";
          }
          else if (this.selectedUnit == "meter" && this.selectedUnit2 =="centimeter" ){
            return squareNumber * 100 + " centimeters";
          }
          else if (this.selectedUnit == "meter" && this.selectedUnit2 =="kilometer" ){
            return squareNumber / 1000 + " kilometers";
          } 
          else if (this.selectedUnit == "centimeter" && this.selectedUnit2 =="meter" ){
            return squareNumber / 100 + " meters";
          }
          else if (this.selectedUnit == "centimeter" && this.selectedUnit2 =="decimeter" ){
            return squareNumber / 10 + " decimeters";
          }
          else if (this.selectedUnit == "centimeter" && this.selectedUnit2 =="centimeter" ){
            return squareNumber * 100 + " centimeters";
          }
          else if (this.selectedUnit == "centimeter" && this.selectedUnit2 =="kilometer" ){
            return squareNumber / 100000 + " kilometers";
          }
          else if (this.selectedUnit == "decimeter" && this.selectedUnit2 =="meter" ){
            return squareNumber / 10 + " meters";
          }
          else if (this.selectedUnit == "decimeter" && this.selectedUnit2 =="centimeter" ){
            return squareNumber * 10 + " centimeters";
          }
          else if (this.selectedUnit == "decimeter" && this.selectedUnit2 =="kilometer" ){
            return squareNumber / 10000 + " kilometers";
          }
          else if (this.selectedUnit == "decimeter" && this.selectedUnit2 =="decimeter" ){
            return squareNumber * 10 + " decimeters";
          }
          else if (this.selectedUnit == "kilometer" && this.selectedUnit2 =="meter" ){
            return squareNumber * 1000 + " meters";
          }
          else if (this.selectedUnit == "kilometer" && this.selectedUnit2 =="centimeter" ){
            return squareNumber * 100000 + " centimeters";
          }
          else if (this.selectedUnit == "kilometer" && this.selectedUnit2 =="decimeter" ){
            return squareNumber * 10000 + " decimeters";
          }
          else if (this.selectedUnit == "kilometer" && this.selectedUnit2 =="kilometer" ){
            return squareNumber / 1000 + " kilometers";
          }
          else{
            return squareNumber;
          }
        } else{
          if(this.selectedAreaUnit == "meter square" && this.selectedAreaUnit2 =="meter square"){
            return squareNumber + " meters square";
          }
          else if (this.selectedAreaUnit == "meter square" && this.selectedAreaUnit2 =="decimeter square"){
            return squareNumber * 100 + " decimeters square";
          }
          else if (this.selectedAreaUnit == "meter square" && this.selectedAreaUnit2 =="centimeter square" ){
            return squareNumber * 10000 + " centimeters square";
          }
          else if (this.selectedAreaUnit == "meter square" && this.selectedAreaUnit2 =="kilometer square" ){
            return squareNumber / 1000000 + " kilometers square";
          } 
          else if (this.selectedAreaUnit == "centimeter square" && this.selectedAreaUnit2 =="meter square" ){
            return squareNumber / 10000 + " meters square";
          }
          else if (this.selectedAreaUnit == "centimeter square" && this.selectedAreaUnit2 =="decimeter square" ){
            return squareNumber / 10 + " decimeters square";
          }
          else if (this.selectedAreaUnit == "centimeter square" && this.selectedAreaUnit2 =="centimeter square" ){
            return squareNumber * 10000 + " centimeters square";
          }
          else if (this.selectedAreaUnit == "centimeter square" && this.selectedAreaUnit2 =="kilometer square" ){
            return squareNumber / 10000000 + " kilometers square";
          }
          else if (this.selectedAreaUnit == "decimeter square" && this.selectedAreaUnit2 =="meter square" ){
            return squareNumber / 100 + " meters square";
          }
          else if (this.selectedAreaUnit == "decimeter square" && this.selectedAreaUnit2 =="centimeter square" ){
            return squareNumber * 100 + " centimeters square";
          }
          else if (this.selectedAreaUnit == "decimeter square" && this.selectedAreaUnit2 =="kilometer square" ){
            return squareNumber / 100000000 + " kilometers square";
          }
          else if (this.selectedAreaUnit == "decimeter square" && this.selectedAreaUnit2 =="decimeter square" ){
            return squareNumber * 100 + " decimeters square";
          }
          else if (this.selectedAreaUnit == "kilometer square" && this.selectedAreaUnit2 =="meter square" ){
            return squareNumber * 1000000 + " meters square";
          }
          else if (this.selectedAreaUnit == "kilometer square" && this.selectedAreaUnit2 =="centimeter square" ){
            return squareNumber * 10000000 + " centimeters square";
          }
          else if (this.selectedAreaUnit == "kilometer square" && this.selectedAreaUnit2 =="decimeter square" ){
            return squareNumber * 10000 + " decimeters square";
          }
          else if (this.selectedAreaUnit == "kilometer square" && this.selectedAreaUnit2 =="kilometer square" ){
            return squareNumber / 1000000 + " kilometers square";
          }
          else{
            return squareNumber;
          }
        }
 
    }

  }

  ConversionRectangle(){
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
        if(this.selectedOperations.name == "Perimeter"){
          if(this.selectedUnit == "meter" && this.selectedUnit2 =="meter"){
            return rectangleNumber + " meters";
          }
          else if (this.selectedUnit == "meter" && this.selectedUnit2 =="decimeter"){
            return rectangleNumber * 10 + " decimeters";
          }
          else if (this.selectedUnit == "meter" && this.selectedUnit2 =="centimeter" ){
            return rectangleNumber * 100 + " centimeters";
          }
          else if (this.selectedUnit == "meter" && this.selectedUnit2 =="kilometer" ){
            return rectangleNumber / 1000 + " kilometers";
          } 
          else if (this.selectedUnit == "centimeter" && this.selectedUnit2 =="meter" ){
            return rectangleNumber / 100 + " meters";
          }
          else if (this.selectedUnit == "centimeter" && this.selectedUnit2 =="decimeter" ){
            return rectangleNumber / 10 + " decimeters";
          }
          else if (this.selectedUnit == "centimeter" && this.selectedUnit2 =="centimeter" ){
            return rectangleNumber * 100 + " centimeters";
          }
          else if (this.selectedUnit == "centimeter" && this.selectedUnit2 =="kilometer" ){
            return rectangleNumber / 100000 + " kilometers";
          }
          else if (this.selectedUnit == "decimeter" && this.selectedUnit2 =="meter" ){
            return rectangleNumber / 10 + " meters";
          }
          else if (this.selectedUnit == "decimeter" && this.selectedUnit2 =="centimeter" ){
            return rectangleNumber * 10 + " centimeters";
          }
          else if (this.selectedUnit == "decimeter" && this.selectedUnit2 =="kilometer" ){
            return rectangleNumber / 10000 + " kilometers";
          }
          else if (this.selectedUnit == "decimeter" && this.selectedUnit2 =="decimeter" ){
            return rectangleNumber * 10 + " decimeters";
          }
          else if (this.selectedUnit == "kilometer" && this.selectedUnit2 =="meter" ){
            return rectangleNumber * 1000 + " meters";
          }
          else if (this.selectedUnit == "kilometer" && this.selectedUnit2 =="centimeter" ){
            return rectangleNumber * 100000 + " centimeters";
          }
          else if (this.selectedUnit == "kilometer" && this.selectedUnit2 =="decimeter" ){
            return rectangleNumber * 10000 + " decimeters";
          }
          else if (this.selectedUnit == "kilometer" && this.selectedUnit2 =="kilometer" ){
            return rectangleNumber / 1000 + " kilometers";
          }
          else{
            return rectangleNumber;
          }
        } else{
          if(this.selectedAreaUnit == "meter square" && this.selectedAreaUnit2 =="meter square"){
            return rectangleNumber + " meters square";
          }
          else if (this.selectedAreaUnit == "meter square" && this.selectedAreaUnit2 =="decimeter square"){
            return rectangleNumber * 100 + " decimeters square";
          }
          else if (this.selectedAreaUnit == "meter square" && this.selectedAreaUnit2 =="centimeter square" ){
            return rectangleNumber * 10000 + " centimeters square";
          }
          else if (this.selectedAreaUnit == "meter square" && this.selectedAreaUnit2 =="kilometer square" ){
            return rectangleNumber / 1000000 + " kilometers square";
          } 
          else if (this.selectedAreaUnit == "centimeter square" && this.selectedAreaUnit2 =="meter square" ){
            return rectangleNumber / 10000 + " meters square";
          }
          else if (this.selectedAreaUnit == "centimeter square" && this.selectedAreaUnit2 =="decimeter square" ){
            return rectangleNumber / 10 + " decimeters square";
          }
          else if (this.selectedAreaUnit == "centimeter square" && this.selectedAreaUnit2 =="centimeter square" ){
            return rectangleNumber * 10000 + " centimeters square";
          }
          else if (this.selectedAreaUnit == "centimeter square" && this.selectedAreaUnit2 =="kilometer square" ){
            return rectangleNumber / 10000000 + " kilometers square";
          }
          else if (this.selectedAreaUnit == "decimeter square" && this.selectedAreaUnit2 =="meter square" ){
            return rectangleNumber / 100 + " meters square";
          }
          else if (this.selectedAreaUnit == "decimeter square" && this.selectedAreaUnit2 =="centimeter square" ){
            return rectangleNumber * 100 + " centimeters square";
          }
          else if (this.selectedAreaUnit == "decimeter square" && this.selectedAreaUnit2 =="kilometer square" ){
            return rectangleNumber / 100000000 + " kilometers square";
          }
          else if (this.selectedAreaUnit == "decimeter square" && this.selectedAreaUnit2 =="decimeter square" ){
            return rectangleNumber * 100 + " decimeters square";
          }
          else if (this.selectedAreaUnit == "kilometer square" && this.selectedAreaUnit2 =="meter square" ){
            return rectangleNumber * 1000000 + " meters square";
          }
          else if (this.selectedAreaUnit == "kilometer square" && this.selectedAreaUnit2 =="centimeter square" ){
            return rectangleNumber * 10000000 + " centimeters square";
          }
          else if (this.selectedAreaUnit == "kilometer square" && this.selectedAreaUnit2 =="decimeter square" ){
            return rectangleNumber * 10000 + " decimeters square";
          }
          else if (this.selectedAreaUnit == "kilometer square" && this.selectedAreaUnit2 =="kilometer square" ){
            return rectangleNumber / 1000000 + " kilometers square";
          }
          else{
            return rectangleNumber;
          }
        }
 
    }

  }

  ConversionCircle(){
    const circleNumber = Number(this.CircleCalculus());
    const convertedCircleValue = <HTMLInputElement>document.getElementById("convertedCircleValue");
    if(isNaN(circleNumber)){
      convertedCircleValue.style.color = "red";
      convertedCircleValue.style.fontFamily = "Comfortaa";
      return "You need to calculate area or perimeter before converting";
    }  else{
      convertedCircleValue.style.color = "green";
      convertedCircleValue.style.fontFamily = "Comfortaa";
        if(this.selectedOperations.name == "Perimeter"){
          if(this.selectedUnit == "meter" && this.selectedUnit2 =="meter"){
            return circleNumber + " meters";
          }
          else if (this.selectedUnit == "meter" && this.selectedUnit2 =="decimeter"){
            return circleNumber * 10 + " decimeters";
          }
          else if (this.selectedUnit == "meter" && this.selectedUnit2 =="centimeter" ){
            return circleNumber * 100 + " centimeters";
          }
          else if (this.selectedUnit == "meter" && this.selectedUnit2 =="kilometer" ){
            return circleNumber / 1000 + " kilometers";
          } 
          else if (this.selectedUnit == "centimeter" && this.selectedUnit2 =="meter" ){
            return circleNumber / 100 + " meters";
          }
          else if (this.selectedUnit == "centimeter" && this.selectedUnit2 =="decimeter" ){
            return circleNumber / 10 + " decimeters";
          }
          else if (this.selectedUnit == "centimeter" && this.selectedUnit2 =="centimeter" ){
            return circleNumber * 100 + " centimeters";
          }
          else if (this.selectedUnit == "centimeter" && this.selectedUnit2 =="kilometer" ){
            return circleNumber / 100000 + " kilometers";
          }
          else if (this.selectedUnit == "decimeter" && this.selectedUnit2 =="meter" ){
            return circleNumber / 10 + " meters";
          }
          else if (this.selectedUnit == "decimeter" && this.selectedUnit2 =="centimeter" ){
            return circleNumber * 10 + " centimeters";
          }
          else if (this.selectedUnit == "decimeter" && this.selectedUnit2 =="kilometer" ){
            return circleNumber / 10000 + " kilometers";
          }
          else if (this.selectedUnit == "decimeter" && this.selectedUnit2 =="decimeter" ){
            return circleNumber * 10 + " decimeters";
          }
          else if (this.selectedUnit == "kilometer" && this.selectedUnit2 =="meter" ){
            return circleNumber * 1000 + " meters";
          }
          else if (this.selectedUnit == "kilometer" && this.selectedUnit2 =="centimeter" ){
            return circleNumber * 100000 + " centimeters";
          }
          else if (this.selectedUnit == "kilometer" && this.selectedUnit2 =="decimeter" ){
            return circleNumber * 10000 + " decimeters";
          }
          else if (this.selectedUnit == "kilometer" && this.selectedUnit2 =="kilometer" ){
            return circleNumber / 1000 + " kilometers";
          }
          else{
            return circleNumber;
          }
        } else{
          if(this.selectedAreaUnit == "meter square" && this.selectedAreaUnit2 =="meter square"){
            return circleNumber + " meters square";
          }
          else if (this.selectedAreaUnit == "meter square" && this.selectedAreaUnit2 =="decimeter square"){
            return circleNumber * 100 + " decimeters square";
          }
          else if (this.selectedAreaUnit == "meter square" && this.selectedAreaUnit2 =="centimeter square" ){
            return circleNumber * 10000 + " centimeters square";
          }
          else if (this.selectedAreaUnit == "meter square" && this.selectedAreaUnit2 =="kilometer square" ){
            return circleNumber / 1000000 + " kilometers square";
          } 
          else if (this.selectedAreaUnit == "centimeter square" && this.selectedAreaUnit2 =="meter square" ){
            return circleNumber / 10000 + " meters square";
          }
          else if (this.selectedAreaUnit == "centimeter square" && this.selectedAreaUnit2 =="decimeter square" ){
            return circleNumber / 10 + " decimeters square";
          }
          else if (this.selectedAreaUnit == "centimeter square" && this.selectedAreaUnit2 =="centimeter square" ){
            return circleNumber * 10000 + " centimeters square";
          }
          else if (this.selectedAreaUnit == "centimeter square" && this.selectedAreaUnit2 =="kilometer square" ){
            return circleNumber / 10000000 + " kilometers square";
          }
          else if (this.selectedAreaUnit == "decimeter square" && this.selectedAreaUnit2 =="meter square" ){
            return circleNumber / 100 + " meters square";
          }
          else if (this.selectedAreaUnit == "decimeter square" && this.selectedAreaUnit2 =="centimeter square" ){
            return circleNumber * 100 + " centimeters square";
          }
          else if (this.selectedAreaUnit == "decimeter square" && this.selectedAreaUnit2 =="kilometer square" ){
            return circleNumber / 100000000 + " kilometers square";
          }
          else if (this.selectedAreaUnit == "decimeter square" && this.selectedAreaUnit2 =="decimeter square" ){
            return circleNumber * 100 + " decimeters square";
          }
          else if (this.selectedAreaUnit == "kilometer square" && this.selectedAreaUnit2 =="meter square" ){
            return circleNumber * 1000000 + " meters square";
          }
          else if (this.selectedAreaUnit == "kilometer square" && this.selectedAreaUnit2 =="centimeter square" ){
            return circleNumber * 10000000 + " centimeters square";
          }
          else if (this.selectedAreaUnit == "kilometer square" && this.selectedAreaUnit2 =="decimeter square" ){
            return circleNumber * 10000 + " decimeters square";
          }
          else if (this.selectedAreaUnit == "kilometer square" && this.selectedAreaUnit2 =="kilometer square" ){
            return circleNumber / 1000000 + " kilometers square";
          }
          else{
            return circleNumber;
          }
        }
 
    }
  }

  convertTrianglePerimeter(){
    const trianglePerimeterNumber = Number(this.TrianglePerimeterCalculus()) ;
    const convertedTrianglePerimeter = <HTMLInputElement>document.getElementById("convertedTrianglePerimeter");
    if(isNaN(trianglePerimeterNumber)){
      convertedTrianglePerimeter.style.color = "red";
      convertedTrianglePerimeter.style.fontFamily = "Comfortaa";
      return "You need to calculate area or perimeter before converting";
    }   else{
      convertedTrianglePerimeter.style.color = "green";
      convertedTrianglePerimeter.style.fontFamily = "Comfortaa";
        if(this.selectedOperations.name == "Perimeter"){
          if(this.selectedUnit == "meter" && this.selectedUnit2 =="meter"){
            return trianglePerimeterNumber + " meters";
          }
          else if (this.selectedUnit == "meter" && this.selectedUnit2 =="decimeter"){
            return trianglePerimeterNumber * 10 + " decimeters";
          }
          else if (this.selectedUnit == "meter" && this.selectedUnit2 =="centimeter" ){
            return trianglePerimeterNumber * 100 + " centimeters";
          }
          else if (this.selectedUnit == "meter" && this.selectedUnit2 =="kilometer" ){
            return trianglePerimeterNumber / 1000 + " kilometers";
          } 
          else if (this.selectedUnit == "centimeter" && this.selectedUnit2 =="meter" ){
            return trianglePerimeterNumber / 100 + " meters";
          }
          else if (this.selectedUnit == "centimeter" && this.selectedUnit2 =="decimeter" ){
            return trianglePerimeterNumber / 10 + " decimeters";
          }
          else if (this.selectedUnit == "centimeter" && this.selectedUnit2 =="centimeter" ){
            return trianglePerimeterNumber * 100 + " centimeters";
          }
          else if (this.selectedUnit == "centimeter" && this.selectedUnit2 =="kilometer" ){
            return trianglePerimeterNumber / 100000 + " kilometers";
          }
          else if (this.selectedUnit == "decimeter" && this.selectedUnit2 =="meter" ){
            return trianglePerimeterNumber / 10 + " meters";
          }
          else if (this.selectedUnit == "decimeter" && this.selectedUnit2 =="centimeter" ){
            return trianglePerimeterNumber * 10 + " centimeters";
          }
          else if (this.selectedUnit == "decimeter" && this.selectedUnit2 =="kilometer" ){
            return trianglePerimeterNumber / 10000 + " kilometers";
          }
          else if (this.selectedUnit == "decimeter" && this.selectedUnit2 =="decimeter" ){
            return trianglePerimeterNumber * 10 + " decimeters";
          }
          else if (this.selectedUnit == "kilometer" && this.selectedUnit2 =="meter" ){
            return trianglePerimeterNumber * 1000 + " meters";
          }
          else if (this.selectedUnit == "kilometer" && this.selectedUnit2 =="centimeter" ){
            return trianglePerimeterNumber * 100000 + " centimeters";
          }
          else if (this.selectedUnit == "kilometer" && this.selectedUnit2 =="decimeter" ){
            return trianglePerimeterNumber * 10000 + " decimeters";
          }
          else if (this.selectedUnit == "kilometer" && this.selectedUnit2 =="kilometer" ){
            return trianglePerimeterNumber / 1000 + " kilometers";
          }
          else{
            return trianglePerimeterNumber;
          }
        } else{
          if(this.selectedAreaUnit == "meter square" && this.selectedAreaUnit2 =="meter square"){
            return trianglePerimeterNumber + " meters square";
          }
          else if (this.selectedAreaUnit == "meter square" && this.selectedAreaUnit2 =="decimeter square"){
            return trianglePerimeterNumber * 100 + " decimeters square";
          }
          else if (this.selectedAreaUnit == "meter square" && this.selectedAreaUnit2 =="centimeter square" ){
            return trianglePerimeterNumber * 10000 + " centimeters square";
          }
          else if (this.selectedAreaUnit == "meter square" && this.selectedAreaUnit2 =="kilometer square" ){
            return trianglePerimeterNumber / 1000000 + " kilometers square";
          } 
          else if (this.selectedAreaUnit == "centimeter square" && this.selectedAreaUnit2 =="meter square" ){
            return trianglePerimeterNumber / 10000 + " meters square";
          }
          else if (this.selectedAreaUnit == "centimeter square" && this.selectedAreaUnit2 =="decimeter square" ){
            return trianglePerimeterNumber / 10 + " decimeters square";
          }
          else if (this.selectedAreaUnit == "centimeter square" && this.selectedAreaUnit2 =="centimeter square" ){
            return trianglePerimeterNumber * 10000 + " centimeters square";
          }
          else if (this.selectedAreaUnit == "centimeter square" && this.selectedAreaUnit2 =="kilometer square" ){
            return trianglePerimeterNumber / 10000000 + " kilometers square";
          }
          else if (this.selectedAreaUnit == "decimeter square" && this.selectedAreaUnit2 =="meter square" ){
            return trianglePerimeterNumber / 100 + " meters square";
          }
          else if (this.selectedAreaUnit == "decimeter square" && this.selectedAreaUnit2 =="centimeter square" ){
            return trianglePerimeterNumber * 100 + " centimeters square";
          }
          else if (this.selectedAreaUnit == "decimeter square" && this.selectedAreaUnit2 =="kilometer square" ){
            return trianglePerimeterNumber / 100000000 + " kilometers square";
          }
          else if (this.selectedAreaUnit == "decimeter square" && this.selectedAreaUnit2 =="decimeter square" ){
            return trianglePerimeterNumber * 100 + " decimeters square";
          }
          else if (this.selectedAreaUnit == "kilometer square" && this.selectedAreaUnit2 =="meter square" ){
            return trianglePerimeterNumber * 1000000 + " meters square";
          }
          else if (this.selectedAreaUnit == "kilometer square" && this.selectedAreaUnit2 =="centimeter square" ){
            return trianglePerimeterNumber * 10000000 + " centimeters square";
          }
          else if (this.selectedAreaUnit == "kilometer square" && this.selectedAreaUnit2 =="decimeter square" ){
            return trianglePerimeterNumber * 10000 + " decimeters square";
          }
          else if (this.selectedAreaUnit == "kilometer square" && this.selectedAreaUnit2 =="kilometer square" ){
            return trianglePerimeterNumber / 1000000 + " kilometers square";
          }
          else{
            return trianglePerimeterNumber;
          }
        }
 
    }
  }

  convertTriangleArea(){
    const TriangleAreaNumber = Number(this. TriangleAreaCalculus()) ;
    const convertedTriangleArea = <HTMLInputElement>document.getElementById("convertedTriangleArea");
    if(isNaN(TriangleAreaNumber)){
      convertedTriangleArea.style.color = "red";
      convertedTriangleArea.style.fontFamily = "Comfortaa";
      return "You need to calculate area or perimeter before converting";
    }   else{
      convertedTriangleArea.style.color = "green";
      convertedTriangleArea.style.fontFamily = "Comfortaa";
        if(this.selectedOperations.name == "Perimeter"){
          if(this.selectedUnit == "meter" && this.selectedUnit2 =="meter"){
            return TriangleAreaNumber + " meters";
          }
          else if (this.selectedUnit == "meter" && this.selectedUnit2 =="decimeter"){
            return TriangleAreaNumber * 10 + " decimeters";
          }
          else if (this.selectedUnit == "meter" && this.selectedUnit2 =="centimeter" ){
            return TriangleAreaNumber * 100 + " centimeters";
          }
          else if (this.selectedUnit == "meter" && this.selectedUnit2 =="kilometer" ){
            return TriangleAreaNumber / 1000 + " kilometers";
          } 
          else if (this.selectedUnit == "centimeter" && this.selectedUnit2 =="meter" ){
            return TriangleAreaNumber / 100 + " meters";
          }
          else if (this.selectedUnit == "centimeter" && this.selectedUnit2 =="decimeter" ){
            return TriangleAreaNumber / 10 + " decimeters";
          }
          else if (this.selectedUnit == "centimeter" && this.selectedUnit2 =="centimeter" ){
            return TriangleAreaNumber * 100 + " centimeters";
          }
          else if (this.selectedUnit == "centimeter" && this.selectedUnit2 =="kilometer" ){
            return TriangleAreaNumber / 100000 + " kilometers";
          }
          else if (this.selectedUnit == "decimeter" && this.selectedUnit2 =="meter" ){
            return TriangleAreaNumber / 10 + " meters";
          }
          else if (this.selectedUnit == "decimeter" && this.selectedUnit2 =="centimeter" ){
            return TriangleAreaNumber * 10 + " centimeters";
          }
          else if (this.selectedUnit == "decimeter" && this.selectedUnit2 =="kilometer" ){
            return TriangleAreaNumber / 10000 + " kilometers";
          }
          else if (this.selectedUnit == "decimeter" && this.selectedUnit2 =="decimeter" ){
            return TriangleAreaNumber * 10 + " decimeters";
          }
          else if (this.selectedUnit == "kilometer" && this.selectedUnit2 =="meter" ){
            return TriangleAreaNumber * 1000 + " meters";
          }
          else if (this.selectedUnit == "kilometer" && this.selectedUnit2 =="centimeter" ){
            return TriangleAreaNumber * 100000 + " centimeters";
          }
          else if (this.selectedUnit == "kilometer" && this.selectedUnit2 =="decimeter" ){
            return TriangleAreaNumber * 10000 + " decimeters";
          }
          else if (this.selectedUnit == "kilometer" && this.selectedUnit2 =="kilometer" ){
            return TriangleAreaNumber / 1000 + " kilometers";
          }
          else{
            return TriangleAreaNumber;
          }
        } else{
          if(this.selectedAreaUnit == "meter square" && this.selectedAreaUnit2 =="meter square"){
            return TriangleAreaNumber + " meters square";
          }
          else if (this.selectedAreaUnit == "meter square" && this.selectedAreaUnit2 =="decimeter square"){
            return TriangleAreaNumber * 100 + " decimeters square";
          }
          else if (this.selectedAreaUnit == "meter square" && this.selectedAreaUnit2 =="centimeter square" ){
            return TriangleAreaNumber * 10000 + " centimeters square";
          }
          else if (this.selectedAreaUnit == "meter square" && this.selectedAreaUnit2 =="kilometer square" ){
            return TriangleAreaNumber / 1000000 + " kilometers square";
          } 
          else if (this.selectedAreaUnit == "centimeter square" && this.selectedAreaUnit2 =="meter square" ){
            return TriangleAreaNumber / 10000 + " meters square";
          }
          else if (this.selectedAreaUnit == "centimeter square" && this.selectedAreaUnit2 =="decimeter square" ){
            return TriangleAreaNumber / 10 + " decimeters square";
          }
          else if (this.selectedAreaUnit == "centimeter square" && this.selectedAreaUnit2 =="centimeter square" ){
            return TriangleAreaNumber * 10000 + " centimeters square";
          }
          else if (this.selectedAreaUnit == "centimeter square" && this.selectedAreaUnit2 =="kilometer square" ){
            return TriangleAreaNumber / 10000000 + " kilometers square";
          }
          else if (this.selectedAreaUnit == "decimeter square" && this.selectedAreaUnit2 =="meter square" ){
            return TriangleAreaNumber / 100 + " meters square";
          }
          else if (this.selectedAreaUnit == "decimeter square" && this.selectedAreaUnit2 =="centimeter square" ){
            return TriangleAreaNumber * 100 + " centimeters square";
          }
          else if (this.selectedAreaUnit == "decimeter square" && this.selectedAreaUnit2 =="kilometer square" ){
            return TriangleAreaNumber / 100000000 + " kilometers square";
          }
          else if (this.selectedAreaUnit == "decimeter square" && this.selectedAreaUnit2 =="decimeter square" ){
            return TriangleAreaNumber * 100 + " decimeters square";
          }
          else if (this.selectedAreaUnit == "kilometer square" && this.selectedAreaUnit2 =="meter square" ){
            return TriangleAreaNumber * 1000000 + " meters square";
          }
          else if (this.selectedAreaUnit == "kilometer square" && this.selectedAreaUnit2 =="centimeter square" ){
            return TriangleAreaNumber * 10000000 + " centimeters square";
          }
          else if (this.selectedAreaUnit == "kilometer square" && this.selectedAreaUnit2 =="decimeter square" ){
            return TriangleAreaNumber * 10000 + " decimeters square";
          }
          else if (this.selectedAreaUnit == "kilometer square" && this.selectedAreaUnit2 =="kilometer square" ){
            return TriangleAreaNumber / 1000000 + " kilometers square";
          }
          else{
            return TriangleAreaNumber;
          }
        }
 
    }
  }

  Conversion(){}
  submission(event:any){}
  TrianglePerimeterCalculus(){
    this.firstSide = (<HTMLInputElement>document.getElementById("firstside")).value;
    this.secondSide = (<HTMLInputElement>document.getElementById("secondside")).value;
    this.thirdSide= (<HTMLInputElement>document.getElementById("thirdside")).value;
    const trianglePerimeter = <HTMLInputElement>document.getElementById("trianglePerimeter");
    const firstSideNumber = Number( this.firstSide);
    const secondSideNumber = Number(this.secondSide);
    const thirdSideNumber = Number(this.thirdSide);
    trianglePerimeter.style.fontFamily = "Comfortaa";

    if(this.firstSide == "" ||  this.secondSide =="" || this.thirdSide=="" || isNaN(firstSideNumber) || isNaN(secondSideNumber) || isNaN(thirdSideNumber)){
      trianglePerimeter.style.fontFamily = "Comfortaa";
      trianglePerimeter.style.color = "red";
      return "please insert a number for each side";
   } else {
          if(firstSideNumber == 0 || secondSideNumber == 0 || thirdSideNumber == 0  ||  firstSideNumber < 0 || secondSideNumber < 0 || thirdSideNumber < 0){
            trianglePerimeter.style.fontFamily = "Comfortaa";
            trianglePerimeter.style.color = "red";
            return " A side cannot be negative or equal to 0";
          }
          else{
            trianglePerimeter.style.fontFamily = "Comfortaa";
            trianglePerimeter.style.color = "green";
            return firstSideNumber + secondSideNumber + thirdSideNumber;
          }          
      }  
  }

  

  TriangleAreaCalculus(){
    this.base = (<HTMLInputElement>document.getElementById("base")).value;
    this.height = (<HTMLInputElement>document.getElementById("height")).value;
    const triangleArea =  <HTMLInputElement>document.getElementById("triangleArea");
    const baseNumber = Number(this.base);
    const heightNumber = Number(this.height);
   

    if(this.base == "" || this.height =="" || isNaN(baseNumber) || isNaN(heightNumber)){
      triangleArea.style.fontFamily = "Comfortaa";
      triangleArea.style.color = "red";
      return "please insert a number for base and a number for height";
   } else {
          if(baseNumber == 0 || heightNumber == 0 || baseNumber < 0 || heightNumber < 0){
            triangleArea.style.fontFamily = "Comfortaa";
            triangleArea.style.color = "red";
            return " the with and the length cannot be negative or equal to 0";
          }
          else{
            triangleArea.style.fontFamily = "Comfortaa";
            triangleArea.style.color = "green";
            return baseNumber * heightNumber;
          }          
      }  
  }

  CircleCalculus(){
    this.radius = (<HTMLInputElement>document.getElementById("radius")).value;
    const circleSquare = <HTMLInputElement>document.getElementById("circleSquare")
    const radiusNumber = Number(this.radius);
    if (this.radius == "" || isNaN(radiusNumber)) {
      circleSquare.style.fontFamily = "Comfortaa";
      circleSquare.style.color = "red";
      return "Please insert a number for side"
    } else {
        if (this.selectedOperations.name == "Area") {
          if (radiusNumber == 0 || radiusNumber < 0) {
            circleSquare.style.fontFamily = "Comfortaa";
            circleSquare.style.color = "red";
            return " the side cannot be negative or equal to 0";
          } else {
            circleSquare.style.fontFamily = "Comfortaa";
            circleSquare.style.color = "green";
            return (2 * radiusNumber * Math.PI);
          }
        } else {
          if(radiusNumber == 0 || radiusNumber < 0){
            circleSquare.style.fontFamily = "Comfortaa";
            circleSquare.style.color = "red";
            return " the with and the length cannot be negative or equal to 0";
          }
          else{
            circleSquare.style.fontFamily = "Comfortaa";
            circleSquare.style.color = "green";
            return (radiusNumber * radiusNumber * Math.PI);
          }
        }
    }
  }
  

  SquareCalculus(){
    this.side = (<HTMLInputElement>document.getElementById("side")).value;
    const squareValue = <HTMLInputElement>document.getElementById("squareValue")
    const sideNumber = Number(this.side);
    if (this.side == "" || isNaN(sideNumber)) {
      squareValue.style.fontFamily = "Comfortaa"
      squareValue.style.color = "red";
      return "Please insert a number for side"
    } else {
        if (this.selectedOperations.name == "Area") {
          if (sideNumber == 0 || sideNumber < 0) {
            squareValue.style.fontFamily = "Comfortaa"
            squareValue.style.color = "red";
            return " the side cannot be negative or equal to 0";
          } else {
            squareValue.style.fontFamily = "Comfortaa"
            squareValue.style.color = "green";
            return sideNumber * sideNumber;
          }
        } else {
          if(sideNumber == 0 || sideNumber < 0){
            squareValue.style.fontFamily = "Comfortaa"
            squareValue.style.color = "red";
            return " the with and the length cannot be negative or equal to 0";
          }
          else{
            squareValue.style.fontFamily = "Comfortaa"
            squareValue.style.color = "green";
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
    const responseElement =  <HTMLInputElement>document.getElementById("rectangleValue")
   
   if(this.length == "" || this.width =="" || isNaN(widthNumber) || isNaN(lengthNumber)){
      responseElement.style.color = "red";
      responseElement.style.fontFamily = "Comfortaa"
      return "Please insert a number for width and a number for length";
   } else {
        if(this.selectedOperations.name == "Area"){
          if(widthNumber == 0 || lengthNumber == 0 || widthNumber < 0 || lengthNumber < 0){
            responseElement.style.fontFamily = "Comfortaa"
            responseElement.style.color = "red";
            return " the with and the length cannot be negative or equal to 0";
          }
          else{
            responseElement.style.color = "green";
            return widthNumber * lengthNumber;
          }
                  
        } else{
          if(widthNumber == 0 || lengthNumber == 0 || widthNumber < 0 || lengthNumber < 0){
            responseElement.style.fontFamily = "Comfortaa"
            responseElement.style.color = "red";
            return " the with and the length cannot be negative or equal to 0";
          }
          else{
            responseElement.style.fontFamily = "Comfortaa"
            responseElement.style.color = "green";
            return (widthNumber + lengthNumber) * 2;
          }
      }
    }  
  }

  OpenSelect(event:any){
    this.selectedFigure = event.value;
  }

  
  

 
   

}
