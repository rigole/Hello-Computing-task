import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent {

  onClickCalculus = false
  isHidden = true

  
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

  

  triangleAreaForm = new FormGroup({
    height: this.height,
    base: this.base,
  })

  TriangleAreaCalculus(){
    const triangleAreaForm = this.triangleAreaForm.value
    const base = Number(triangleAreaForm.base)
    const height = Number(triangleAreaForm.height)
    this.isHidden = !this.isHidden;
    return (base * height)/2
   
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
  

