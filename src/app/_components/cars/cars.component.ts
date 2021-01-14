import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/_services/car.service';
import { Observable, of } from 'rxjs';
import { Cars } from 'src/app/_models/cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Cars[];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    
  }
}