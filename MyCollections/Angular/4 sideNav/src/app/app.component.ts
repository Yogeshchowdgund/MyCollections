import { Component } from '@angular/core';
import { DataService } from './Service/data.service';
import { NavItem } from './Model/nav-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navitemList:NavItem[]=[];

  constructor(private data:DataService){
    this.navitemList = this.data.navItem;
  }
}
