import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../Service/Account/account.service';


@Injectable()


export class RoleGuardService implements CanActivate {

    constructor(private accountservice : AccountService,private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let isCanActivate = false;
        
        if(!isCanActivate){
            // không có quyền thì về trang chủ
            this.router.navigate(['/Home']);
        }
        return isCanActivate;
    }

    private CheckPermisson(route: ActivatedRouteSnapshot, roles: any)
    {
        if(route.data['roles'] !== null)
        {
            for(const element of route.data['roles']){
                if(roles.includes(element))
                {
                    return true
                }
            }
        }

        return false;
    }

}