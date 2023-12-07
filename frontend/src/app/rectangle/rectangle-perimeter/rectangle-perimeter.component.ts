import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-rectangle-perimeter',
  templateUrl: './rectangle-perimeter.component.html',
  styleUrls: ['./rectangle-perimeter.component.css']
})
export class RectanglePerimeterComponent {

  inSubmission = false
  isHidden = false

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

  RectangleCalculusPerimeter(){
  const rectangleForm = this.rectangleForm.value;
  const length = Number(rectangleForm.length);
  const width = Number(rectangleForm.width);
  this.isHidden = !this.isHidden;

  if (width > length){
    return "width cannot be greater than length";
  }
  else{
    const perimeter = ( length + width) * 2;
    return perimeter;
  }


  
  }

  ConversionRectanglePerimeter(){
    
    
  }

}
