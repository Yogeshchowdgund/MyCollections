import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../Service/data.service';
import { User } from '../Model/user';
import { Item } from '../Model/item';

import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-filter-comp',
  templateUrl: './filter-comp.component.html',
  styleUrls: ['./filter-comp.component.css']
})
export class FilterCompComponent implements OnInit {
  @Input() itemData: Item[] = [];
  @Output() sendfilterData: EventEmitter<any> = new EventEmitter();
  userData: User[]; // Display data in the dropdown
  filteredData: Item[] = [];
  filterForm: FormGroup = new FormGroup({});

  constructor(private data: DataService) {
    this.userData = data.userData;
    this.filterForm = new FormGroup({
      number: new FormControl(),
      assignedUser: new FormControl(),
      createdDate: new FormControl(),
    })
  }

  ngOnInit(): void {
    this.sendfilterData.emit(this.itemData);
  }
  filterData(): void {
    this.filteredData = this.itemData;
    for (var key in this.filterForm.value) {
      if (key !== "createdDate") {
        if (this.filterForm.value[key] !== null) {
          this.filteredData = this.filteredData.filter((obj: any) => {
            return obj[key] == this.filterForm.value[key];
          });

        }
      }
      if (key == "createdDate" && this.filterForm.value[key] !== null) {
        this.filteredData = this.filteredData.filter((obj: any) => {
          return obj.createdDate.toLocaleDateString() == new Date(this.filterForm.value[key]).toLocaleDateString();
        });
      }
    }
    this.sendfilterData.emit(this.filteredData);
  }
  clearFilter() {
    this.filterForm.reset();
    this.sendfilterData.emit(this.itemData);
  }
}
