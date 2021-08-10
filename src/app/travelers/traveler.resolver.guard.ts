import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from "@angular/router";
import { Observable } from "rxjs";
import { Traveler } from "./traveler.model";
import { TravelersService } from "./travelers.service";

@Injectable()
export class TravelerResolverGuard implements Resolve<Traveler>{

    constructor (private travelersService : TravelersService){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Traveler | Observable<Traveler> | Promise<Traveler>{
        if(route.params && route.params['id']){
            return this.travelersService.findTravelerById(route.params['id']);
        }
    }

}