import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent {

  inSubmission = false

  
  height = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(0),
    Validators.max(9999)
  ])

  base = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(0),
    Validators.max(9999)
  ])

  

  triangleForm = new FormGroup({
    height: this.height,
    base: this.base,
  })

  TriangleAreaCalculus(){
   /*
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

      */
  }

   //Triangle Perimeters Operations
  
  TrianglePerimeterCalculus(){
    /*
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
      */ 
  }

  convertTriangleArea(){
   /*
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
    */
  }

}
  //Triangle Area Operations
  

