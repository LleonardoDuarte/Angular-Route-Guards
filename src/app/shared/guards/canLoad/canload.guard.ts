import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CanloadGuard implements CanLoad {
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(route);
    console.log(segments);


    // Aqui ele verifica se existe o core/leads se nao existir ele vai dar o sinal de alert
    if (segments[1]?.path === 'leads') {
      return true;
    }
    alert('Modulo nao foi carregado');
    return false;
  }
}
