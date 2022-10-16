import { Component } from '@angular/core';
import { KPIData } from './Model/kpidata';
import { DataService } from './Service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dataCard';
  kpidata:KPIData[];

  constructor(private data:DataService){
    this.kpidata = data.kpiData;
  }

}
