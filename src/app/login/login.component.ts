import { Component, OnInit } from '@angular/core';
import {ElsoService} from "../elso.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  infologin = "";
  log = "";

  constructor(private service: ElsoService) {
  }

  ngOnInit(): void {
      if(!this.service.getlogin()){
        this.infologin = "If you want to check the list, make new data or update data you need to click on the \"login\" button";
        this.log = "Login";
      }
      else{
        this.infologin = "You are logged in";
        this.log = "Logout";
      }
    }

  loggedin(): void {
    if (!this.service.getlogin()) {
      this.service.setlogin(true);
      this.log = "Logout";
      this.infologin = "You are logged in";
    }
    else{
      this.service.setlogin(false);
      this.log = "Login";
      this.infologin = "If you want to check the list, make new data or update data you need to click on the \"login\" button";
    }
  }
}
