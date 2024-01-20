import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { firstValueFrom } from 'rxjs';
import { LoginStateService } from "./login-state.service";

export const authGuard = async () => {
  const loginState = inject(LoginStateService);
  const router = inject(Router);

  try {
    const isLoggedIn = await firstValueFrom(loginState.loggedIn$.pipe());
    console.log('verificando login')
    if (isLoggedIn) {
      console.log('logado')
      return true;
     
    } else {
      console.log('deslogado')
      router.navigate(['/login']);
      return false;
    }
  } catch (error) {
    console.error('Error in authGuard:', error);
    return false;
  }
};
