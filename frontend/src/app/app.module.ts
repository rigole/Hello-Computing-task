import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RectangleComponent } from './rectangle/rectangle-area/rectangle.component';
import { InputComponent } from './input/input.component';
import { SquareComponent } from './square/square-perimeter/square.component';
import { CircleComponent } from './circle/circle-area/circle.component';
import { TriangleComponent } from './triangle/triangle.component';
import { TrianglePerimeterComponent } from './triangle-perimeter/triangle-perimeter.component';
import { RectanglePerimeterComponent } from './rectangle/rectangle-perimeter/rectangle-perimeter.component';
import { SquareAreaComponent } from './square/square-area/square-area.component';
import { CirclePerimeterComponent } from './circle/circle-perimeter/circle-perimeter.component';
import { AreaCalculatorComponent } from './area-calculator/area-calculator.component';






@NgModule({
  declarations: [
    AppComponent,
    RectangleComponent,
    InputComponent,
    SquareComponent,
    CircleComponent,
    TriangleComponent,
    TrianglePerimeterComponent,
    RectanglePerimeterComponent,
    SquareAreaComponent,
    CirclePerimeterComponent,
    AreaCalculatorComponent,
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})


 
export class AppModule { }
