import { Injectable } from '@angular/core';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  public userData:User[];

  constructor() {

    this.userData = [
      {userId:1, userName:"Name-1"},
      {userId:2, userName:"Name-2"},
      {userId:3, userName:"Name-3"},
      {userId:4, userName:"Name-4"},
      {userId:5, userName:"Name-5"},
      {userId:6, userName:"Name-6"},
      {userId:7, userName:"Name-7"},
    ];
  }


}
