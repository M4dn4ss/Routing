import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): Promise<boolean> {
        return this.authService.isAuthenticated()
            .then((authenticated) => {
                if (authenticated as boolean) {
                    return true;
                } else {
                    this.router.navigate(['/']);
                    return false;
                }
            });          
    }
}
