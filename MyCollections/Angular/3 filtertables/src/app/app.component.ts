import { Component } from '@angular/core';
import { DataService } from './Service/data.service';
import { Item } from './Model/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemData:Item[];
  recvFilteredData:any[]=[];

  constructor(private data:DataService){
    this.itemData = data.itemData;
  }

  GetFilteredData(data:any){
    this.recvFilteredData = data;
  }

}
