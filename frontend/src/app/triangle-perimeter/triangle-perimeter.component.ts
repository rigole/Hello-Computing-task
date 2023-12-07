import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-triangle-perimeter',
  templateUrl: './triangle-perimeter.component.html',
  styleUrls: ['./triangle-perimeter.component.css']
})
export class TrianglePerimeterComponent {


  onClickCalculus = false
  isHidden = true

  firstSide = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(0),
    Validators.max(9999)
  ])

  secondSide = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(0),
    Validators.max(9999)
  ])


  thirdSide = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(0),
    Validators.max(9999)
  ])

  trianglePerimeterForm = new FormGroup({
   firstSide:this.firstSide,
   secondSide:this.secondSide,
   thirdSide: this.thirdSide
  })


  TrianglePerimeterCalculus(){
    const trianglePerimeterForm =  this.trianglePerimeterForm.value
    const firstSide = Number(trianglePerimeterForm.firstSide)
    const secondSide = Number(trianglePerimeterForm.secondSide) 
    const thirdSide = Number(trianglePerimeterForm.thirdSide) 
    this.isHidden = !this.isHidden;
    return firstSide + secondSide + thirdSide;





  }

  convertTrianglePerimeter(){}

}
