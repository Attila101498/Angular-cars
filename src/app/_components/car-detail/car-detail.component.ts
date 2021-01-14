import { Component, OnInit, Input } from '@angular/core';
import { Cars } from 'src/app/_models/cars';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CarService } from 'src/app/_services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars: any;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private location: Location
  ) {}

  ngOnInit(): void {
    
  }
}
