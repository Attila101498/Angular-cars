import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cars } from '../_models/cars';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

//fejléc a kérésekhez
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  //Lekérdezések API végpontról
}