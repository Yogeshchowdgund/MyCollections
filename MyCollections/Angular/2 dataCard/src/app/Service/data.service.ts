import { Injectable } from '@angular/core';
import { KPIData } from '../Model/kpidata';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  kpiData:KPIData[];

  constructor() {
    this.kpiData = [
      {key:1, value:12},
      {key:2, value:32},
      {key:3, value:63},
      {key:4, value:823},
      {key:5, value:923},
      {key:6, value:183},
      {key:7, value:132},
      {key:8, value:132},
      {key:9, value:853},
      {key:10, value:953},
      {key:11, value:553},
      {key:12, value:973},
      {key:13, value:973},
      {key:14, value:973},
      {key:15, value:973}
    ]
  }
}
