import { Component, OnInit } from '@angular/core';
import {ElsoService} from "../elso.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    public service: ElsoService
  ) {
  }

  ngOnInit(): void {
    if (this.service.adatom.length === 0) {
      this.service.fetch().subscribe((data: any) => this.service.adatom = data);
    }
  }
  delete(adat:any): void
  {
    this.service.adatom = this.service.adatom.filter(item=> item!= adat);
  }
}
