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
    base: this.base
  })

  TriangleAreaCalculus(){
    const triangleAreaForm = this.triangleAreaForm.value
    const base = Number(triangleAreaForm.base)
    const height = Number(triangleAreaForm.height)
    //this.isHidden = !this.isHidden;
    return (base * height)/2
   
  }

   
 
  convertTriangleArea(){
    const areaValue = this.TriangleAreaCalculus();
  }
  

}
  //Triangle Area Operations
  

