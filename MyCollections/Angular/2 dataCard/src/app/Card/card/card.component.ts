import { Component, Input, ViewChild, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { KPIData } from 'src/app/Model/kpidata';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input() kpiData: KPIData[] = [];
  @Input() duration: number = 0;
  @Input() rows: number = 2;
  data: any = [] = [];
  indexCount = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.autoValueDisp();
    this.dispTriangle();
  }

  autoValueDisp(): void {
    setInterval(() => {
      this.getData();
    }, this.duration)
  }

  getData(): void {
    if (this.indexCount == this.kpiData.length) {
      this.indexCount = 0;
    }
    for (var i = 0; i < this.rows; i++) {
      if (this.indexCount < this.kpiData.length) {
        const obj = { key: this.kpiData[this.indexCount].key, value: this.kpiData[this.indexCount].value }
        this.data.push(obj);
        this.indexCount++;
      }
    }
    this.displayData();
  }

  displayData(): void {
    this.deleteChild();
    const app = document.getElementById("datadisplay");
    for (var i = 0; i < this.data.length; i++) {
      const p = document.createElement("p");
      p.innerHTML = '<b>' + "key : " + '</b>' + this.data[i].key + " " + '<b>' + "value : " + '</b>' + this.data[i].value;
      p.style.marginTop = "0";
      p.style.marginBottom = "0";
      app?.appendChild(p);
    }
    this.data = [];
  }

  deleteChild(): void {
    const app = document.getElementById("datadisplay");
    while (app?.firstChild) {
      app.removeChild(app?.firstChild);
    }
  }

  dispTriangle(): void {
    var canvasElement = <HTMLCanvasElement>document.querySelector("#myCanvas");
    var context = canvasElement.getContext("2d");

    var context2 = canvasElement.getContext("2d");
    if (context2 !== null) {
      context2.beginPath();
      context2.moveTo(-1, 0);
      context2.lineTo(8, 0);
      context2.strokeStyle = "white";
      context2.lineWidth = 3;
      context2.stroke();
      context2.closePath()
    }
    if (context !== null) {
      context.beginPath();
      context.moveTo(7, 0);
      context.lineTo(4, 130);
      context.lineTo(0, 0);
      context.strokeStyle = "#666666";
      context.lineWidth = 1;
      context.stroke();
      context.closePath()
    }

    // switch(this.rows){
    //   case 1:{
    //     if(context !== null){
    //       context.beginPath();
    //       context.moveTo(7, 0);
    //       context.lineTo(3, 140);
    //       context.lineTo(0, 0);
    //       context.strokeStyle = "#666666";
    //       context.lineWidth = 1;
    //       context.stroke();
    //       context.closePath()
    //     }
    //     break;
    //   }
    //   case 2:{
    //     if(context !== null){
    //       context.moveTo(7, 0);
    //       context.lineTo(4, 100);
    //       context.lineTo(0, 0);
    //       context.strokeStyle = "#666666";
    //       context.lineWidth = 1;
    //       context.stroke();
    //       context.closePath()
    //     }
    //     break;
    //   }
    //   case 3:{
    //     if(context!==null){
    //       context.moveTo(7, 0);
    //       context.lineTo(4, 100);
    //       context.lineTo(0, 0);
    //       context.strokeStyle = "#666666";
    //       context.lineWidth = 1;
    //       context.stroke();
    //       context.closePath()
    //     }
    //     break;
    //   }
    //   case 4:{
    //     if(context !==null){
    //       context.moveTo(7, 0);
    //       context.lineTo(4, 70);
    //       context.lineTo(0, 0);
    //       context.strokeStyle = "#666666";
    //       context.lineWidth = 1;
    //       context.stroke();
    //       context.closePath()

    //     }
    //     break;
    //   }
    //   default:{
    //     if(context !==null){
    //       context.moveTo(7, 0);
    //       context.lineTo(4, 50);
    //       context.lineTo(0, 0);
    //       context.strokeStyle = "#666666";
    //       context.lineWidth = 1;
    //       context.stroke();
    //       context.closePath()

    //     }
    //     break;
    //   }
    // }


  }

}
