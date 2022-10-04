import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree} from '@angular/router'
import { LoginService } from 'app/login/login.service';
import { Observable } from 'rxjs';

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate{
    
    constructor(private loginService:LoginService){}

    checkAuthentication(path: string):boolean{
        const loggedIn = this.loginService.isLoggedIn()

        if(!loggedIn){
            this.loginService.handleLogin(`/${path}`)
        }

        return loggedIn

    }

    canLoad(route: Route): boolean{
       return this.checkAuthentication(route.path)
    }

    canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot):boolean{
        return this.checkAuthentication(activatedRoute.routeConfig.path)
    }

}