import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/services';
import oprations from 'src/operations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})



export class AppComponent implements OnInit{
  title = 'frontend';
  figures:any;
  units:any;
  unitsArea:any;
  selectedOperation: string = ""
  selectedUnit:string;
  selectedUnit2:string;
  selectedFigure:string = "";
  selectedAreaUnit: string;
  selectedAreaUnit2: string;
  


  
  
  constructor(private apiservice: ApiServiceService){
   
    this.selectedUnit = "meter";
    this.selectedUnit2 = "decimeter";
    
    this.selectedAreaUnit = "meter square"
    this.selectedAreaUnit2 = "decimeter square"
    

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
  
 
  
selectedOperations = oprations



 


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
  
  /*
  //Conversion on square Operations 
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
        if(this.selectedOperation.name == "Perimeter"){
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



  //Conversion on Circle Operations 
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
        if(this.selectedOperation.name == "Perimeter"){
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

//Conversion on Triangle perimeters 
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
        if(this.selectedOperation.name == "Perimeter"){
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

//Conversion on Triangle Area 
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
        if(this.selectedOperation.name == "Perimeter"){
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

  /*
  Conversion(){}
  submission(event:any){}*/
  
 
 
  OpenSelect(event:any){
    this.selectedFigure = event.target.value;
  }
  

  OpenSelectOperation(event:any){
    this.selectedOperation= event.target.value ;
    
  }

}


