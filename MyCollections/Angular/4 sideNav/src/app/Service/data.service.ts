import { Injectable } from '@angular/core';
import { NavItem } from '../Model/nav-item';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  navItem:NavItem[]=[];
  constructor() {
    this.navItem = [
      {name:"Component-A", url:"/ComponentA", icon:"bi bi-person-circle"},
      {name:"Component-B", url:"/ComponentB", icon:"bi bi-send"},
      {name:"Component-C", url:"/ComponentC", icon:"bi bi-shift"},
    ]
   }
}

