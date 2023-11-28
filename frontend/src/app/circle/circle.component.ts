import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  radius = new FormControl<number | null>(null, [

    Validators.required,
    Validators.min(0),
    Validators.max(9999)
  ])

  circleForm = new FormGroup({
    radius: this.radius,
    
  })


  CircleCalculus(){}

  ConversionCircle(){}
  
}
