import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/services';


@Component({
  selector: 'app-rectangle-perimeter',
  templateUrl: './rectangle-perimeter.component.html',
  styleUrls: ['./rectangle-perimeter.component.css']
})
export class RectanglePerimeterComponent implements OnInit{

  inSubmission = false
  isHidden = false
  units:any
  selectedUnit:any;
  selectedUnit2:any;

  constructor(private apiservice: ApiServiceService){}

  ngOnInit():void{

    this.apiservice.getUnits().subscribe(res => {
      this.units = res;
    })
  }

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

  ConversionRectanglePerimeter(){}


  OpenSel(event:any){
    this.selectedUnit = event.value;
  }

  OpenSe(event:any){
    this.selectedUnit2 = event.value;
  }

}
