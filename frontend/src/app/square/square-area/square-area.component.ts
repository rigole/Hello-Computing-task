import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms'
import { ApiServiceService } from 'src/services';

@Component({
  selector: 'app-square-area',
  templateUrl: './square-area.component.html',
  styleUrls: ['./square-area.component.css']
})
export class SquareAreaComponent implements OnInit{
  

  onClickCalculus = false
  isHidden = true
  unitsArea:any;
  selectedAreaUnit: any;
  selectedAreaUnit2: any;

  constructor(private apiService: ApiServiceService){}

  ngOnInit(): void {

    this.apiService.getAreaUnits().subscribe(res => {
      this.unitsArea = res;
    })
  }

  side = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(0),
    Validators.max(9999)
  ])

  squareAreaForm = new FormGroup({
    side: this.side
    
  })

  OpenSelectArea(event:any){
    this.selectedAreaUnit = event.value
  }

  OpenSelectArea_(event:any){
    this.selectedAreaUnit2 = event.value
  }



  ConversionSquare(){}
  SquareAreaCalculus(){
    const squareAreaForm = this.squareAreaForm.value;
    const side = Number(squareAreaForm.side)
    this.isHidden = !this.isHidden;
    return side * side;
    
  }

}
