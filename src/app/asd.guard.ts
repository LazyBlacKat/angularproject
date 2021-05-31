import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {ElsoService} from "./elso.service";

@Injectable({
  providedIn: 'root'
})
export class AsdGuard implements CanActivate {
  constructor(private service: ElsoService, private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.service.getlogin()){
    return this.service.getlogin();
    }
    else return this.router.parseUrl('/login');
  }

}
