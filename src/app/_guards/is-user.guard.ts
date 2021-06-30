import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class IsUserGuard implements CanActivate {
  
  constructor(private tokenService: TokenStorageService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,): boolean {
      if (this.tokenService.getToken())
      {
        let user = this.tokenService.getUser();
        return user.roles.includes('ROLE_USER');
      }
      else
      {
        return false;
      }
  }
  
}
