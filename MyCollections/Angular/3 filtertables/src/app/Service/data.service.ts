import { Injectable } from '@angular/core';
import { Item } from '../Model/item';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
itemData:Item[];
userData:User[];

  constructor() {
    this.itemData = [
      {number:1,url:"xyz-1",createdDate:new Date("2022-10-12"), assignedUser:1 },
      {number:1,url:"xyz-12",createdDate:new Date("2022-10-13"), assignedUser:2 },
      {number:1,url:"xyz-13",createdDate:new Date("2022-10-14"), assignedUser:2 },
      {number:1,url:"xyz-14",createdDate:new Date("2022-10-16"), assignedUser:3 },
      {number:1,url:"xyz-15",createdDate:new Date("2022-10-18"), assignedUser:2 },
      {number:2,url:"xyz-2",createdDate:new Date("2022-10-13"), assignedUser:2 },
      {number:3,url:"xyz-3",createdDate:new Date("2022-10-14"), assignedUser:3 },
      {number:4,url:"xyz-4",createdDate:new Date("2022-10-15"), assignedUser:4 },
      {number:5,url:"xyz-5",createdDate:new Date("2022-10-16"), assignedUser:5 },
      {number:6,url:"xyz-6",createdDate:new Date("2022-10-17"), assignedUser:6 },
    ]

    this.userData = [
     {name:"User-1", userId:1},
     {name:"User-2", userId:2},
     {name:"User-3", userId:3},
     {name:"User-4", userId:4},
     {name:"User-5", userId:5},
     {name:"User-6", userId:6},
    ]

   }

}
