import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms'

@Component({
  selector: 'app-square-area',
  templateUrl: './square-area.component.html',
  styleUrls: ['./square-area.component.css']
})
export class SquareAreaComponent {


  onClickCalculus = false
  isHidden = true

  side = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(0),
    Validators.max(9999)
  ])

  squareAreaForm = new FormGroup({
    side: this.side
    
  })



  SquareAreaCalculus(){
    const squareAreaForm = this.squareAreaForm.value;
    const side = Number(squareAreaForm.side)
    this.isHidden = !this.isHidden;
    return side * side;
    
  }

}
