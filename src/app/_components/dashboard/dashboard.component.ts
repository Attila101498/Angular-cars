import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/_services/car.service';
import { Cars } from 'src/app/_models/cars';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  cars: Cars[];
  carForm: FormGroup;

  constructor(
    private carService: CarService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.createTeamForm();
  }

  createTeamForm() {
    this.carForm = this.fb.group({
      carName: ['', Validators.required]
    });
  }
}