import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms'

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {

  side = new FormControl<number | null>(null, [

    Validators.required,
    Validators.min(0),
    Validators.max(9999)
  ])

  squareForm = new FormGroup({
    side: this.side,
    
  })

   //Conversion on square Operations 
   ConversionSquare(){
    /*
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
*/
  }

  //Square  Operations(Area and Perimeters)
  SquareCalculus(){
    /*
    this.side = (<HTMLInputElement>document.getElementById("side")).value;
    const squareValue = <HTMLInputElement>document.getElementById("squareValue")
    const sideNumber = Number(this.side);
    if (this.side == "" || isNaN(sideNumber)) {
      squareValue.style.fontFamily = "Comfortaa"
      squareValue.style.color = "red";
      return "Please insert a number for side"
    } else {
        if (this.selectedOperation.name == "Area") {
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
    */
  }

}
