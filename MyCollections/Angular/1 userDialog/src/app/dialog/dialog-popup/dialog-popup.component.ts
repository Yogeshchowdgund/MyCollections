import { Component, OnInit, Inject, Optional } from '@angular/core';
import { User } from 'src/app/Model/user';
import { DataServiceService } from 'src/app/Serevice/data-service.service';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.css']
})
export class DialogPopupComponent implements OnInit {
  users:User[];
  checked = false;
  selectedUser:User[];

  constructor(private dataservice:DataServiceService, public dialogRef: MatDialogRef<DialogPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: User) {
    this.users = dataservice.userData;
    this.selectedUser = [];
   }

  ngOnInit(): void {
  }

  userSelected(userselectedData:any){
    var user:any = this.users.find(x => x.userName ==userselectedData.source.value);
    var selectedUser = this.selectedUser.find(x => x.userName ==userselectedData.source.value);

    if(selectedUser == undefined){
      this.selectedUser.push(user);
    }else if(selectedUser !=undefined){
      this.removeByAttr(this.selectedUser,'userName',userselectedData.source.value);
    }
    console.log(this.selectedUser)
  }

  removeByAttr = function(arr:any, attr:any, value:any){
    var i = arr.length;
    while(i--){
       if( arr[i]
           && arr[i].hasOwnProperty(attr)
           && (arguments.length > 2 && arr[i][attr] === value ) ){

           arr.splice(i,1);

       }
    }
    return arr;
}

  SubmitUsers(){
    this.dialogRef.close({data:this.selectedUser});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
