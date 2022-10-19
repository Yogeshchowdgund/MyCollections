import { Component,  OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService, private route: Router) {
  }

  ngOnInit(): void {
    this.auth.autoLogout();
  }

  logout(): void {
    this.auth.logout();
  }

}
