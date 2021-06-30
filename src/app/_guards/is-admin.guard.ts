import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

  constructor(private tokenService: TokenStorageService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,): boolean {
      if (this.tokenService.getToken())
      {
        let user = this.tokenService.getUser();
        return user.roles.includes('ROLE_ADMIN');
      }
      else
      {
        return false;
      }
  }
}
