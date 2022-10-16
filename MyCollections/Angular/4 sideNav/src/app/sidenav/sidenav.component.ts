import { Component, OnInit,Input } from '@angular/core';
import { NavItem } from '../Model/nav-item';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() navItemlist:NavItem[]=[];
  @Input() Toggle:boolean=false;
  @Input() showIcon:boolean=true;
  @Input() Title:string="";

  constructor() { }

  ngOnInit(): void {
    if(this.Toggle == false){

      const closebtn = document.getElementById("closebtn");
      if(closebtn !==null){
        closebtn.remove();
      }

      const openbtn = document.getElementById("openbtn");
      if(openbtn !==null){
        openbtn.remove();
      }
      const sideNav = document.getElementById("mySidenav");
      if(sideNav !== null){
        sideNav.style.width = "250px";
      }
    }
  }

  /* Set the width of the side navigation to 250px */
openNav():void {
  if(this.Toggle == true){
    const openbtn = document.getElementById("mySidenav");
    if(openbtn !== null){
      openbtn.style.width = "250px";
    }
  }
}

closeNav():void {
  if(this.Toggle == true){

    // // remove link name
    // const navlink = document.querySelectorAll("a");
    // navlink.forEach(element => {
    //   element.remove();
    // });

    // // remove title
    // const title = document.getElementById("title");
    // if(title !== null){
    //   title.remove();
    // }

    const closebtn = document.getElementById("mySidenav");
    if(closebtn !==null){
     closebtn.style.width = "0";
    }
   }
  }

}
