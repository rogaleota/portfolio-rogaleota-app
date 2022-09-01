import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedIn: Boolean = false;
  user: String = "";
  password: String = "";

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    if (this.user == "rogaleota" && this.password == "rofono2012") {
      this.loggedIn = true;
    }
  }

}
