import { Component, Input } from '@angular/core';
import { ApiServiceService } from 'src/services';
import { AreaUnits } from '../figures';

@Component({
  selector: 'app-area-calculator',
  templateUrl: './area-calculator.component.html',
  styleUrls: ['./area-calculator.component.css']
})


export class AreaCalculatorComponent {

  @Input() value!: number;
  
  public unitsArea:AreaUnits[] = [];
  public selectedAreaUnit: string = "meter square";
  public selectedAreaUnit2: string = "decimeter square";


  constructor(private apiservice: ApiServiceService){}

  ngOnInit(): void {
    
    this.apiservice.getAreaUnits().subscribe(areaunit => {
      this.unitsArea = areaunit;
    })

  }


  OpenSelectArea(event:any){
    this.selectedAreaUnit = event.value
  }

  OpenSelectArea_(event:any){
    this.selectedAreaUnit2 = event.value
  }
  

}
