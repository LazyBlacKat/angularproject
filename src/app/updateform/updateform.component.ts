import { Component, OnInit } from '@angular/core';
import {MyAdat} from "../adat";
import {ElsoService} from "../elso.service";

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit {

  index:number = 0;
  adats = new MyAdat("", "", "", "");
  adat = new MyAdat("", "", "", "");

  constructor(private service: ElsoService) { }

  ngOnInit(): void {
    this.adats = this.service.adatom[this.index];

  }
  search(): void
  {
    this.adats = this.service.adatom[this.index];
  }
  update(): void
  {
    this.adat.word = this.adats.word;
    if(this.adat.nagari.length>0&&this.adat.description.length>0&&this.adat.category.length>0)
    {
      this.service.adatom[this.index] = this.adat;
    }
    this.adat = new MyAdat("", "", "", "");
    this.adats = new MyAdat("", "", "", "");
  }
}
