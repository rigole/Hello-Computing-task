import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-circle-perimeter',
  templateUrl: './circle-perimeter.component.html',
  styleUrls: ['./circle-perimeter.component.css']
})
export class CirclePerimeterComponent {

  isHidden = false
  inSubmission = false
  radius = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(0),
    Validators.max(9999)
  ])

  circlePerimeterForm = new FormGroup({
    radius: this.radius,
    
  })


  CirclePerimeterCalculus(){
    const circlePerimeterForm = this.circlePerimeterForm.value
    const radius = Number(circlePerimeterForm.radius)
    this.isHidden = !this.isHidden;
    return radius * 2 * Math.PI;
  }

  ConversionCircle(){}

}
