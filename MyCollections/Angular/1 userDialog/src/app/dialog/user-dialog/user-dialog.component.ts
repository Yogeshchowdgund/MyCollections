import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/Model/user';
import { DialogPopupComponent } from '../dialog-popup/dialog-popup.component';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'userName'];
  selectedUser: User[] = [];
  showTable: boolean = false;

  dataSource = new MatTableDataSource(this.selectedUser);

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogPopupComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(selectedUser => {
      this.showTable = true;
      debugger;
      this.dataSource = new MatTableDataSource(selectedUser.data);
      console.log(selectedUser);
      // this.selectedUser = selectedUser;
    })
  }

}
