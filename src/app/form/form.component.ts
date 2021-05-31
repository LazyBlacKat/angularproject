import { Component, OnInit } from '@angular/core';
import {MyAdat} from "../adat";
import {ElsoService} from "../elso.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  adat = new MyAdat("", "", "", "");
  check:number = 1;

  constructor(
    private service: ElsoService
  ) {}

  ngOnInit(): void {
  }

  save(): void
  {
    this.service.adatom.push(this.adat);
    this.adat = new MyAdat("", "", "", "");
  }

}
