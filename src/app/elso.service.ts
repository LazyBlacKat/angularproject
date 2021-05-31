import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MyAdat} from "./adat";


@Injectable({
  providedIn: 'root'
})
export class ElsoService {

  private _login: boolean = false;
  public adatom: MyAdat[] = [];

  getlogin(): boolean {
    return this._login;
  }

  setlogin(value: boolean) {
    this._login = value;
  }

  constructor(
    private http: HttpClient
  ) { }


  public fetch(): Observable<any> {
    return this.http.get('https://api-vs.herokuapp.com/vs/v1/resources?word=');
  }
}
