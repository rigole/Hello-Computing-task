import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-circle-area',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {

  isHidden = false
  inSubmission = false
  radius = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(0),
    Validators.max(9999)
  ])

  circleAreaForm = new FormGroup({
    radius: this.radius,
    
  })


  CircleCalculus(){
    const circleAreaForm = this.circleAreaForm.value
    const radius = Number(circleAreaForm.radius)
    this.isHidden = !this.isHidden;
    return radius * radius * Math.PI;
  }

  ConversionCircle(){}
  
}
