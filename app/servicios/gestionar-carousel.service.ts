import { Injectable } from '@angular/core';
import {ImagenCarousel} from '../clases/imagen-carousel';
import {Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionarCarouselService {
  listaImagenes =[{
    'ruta': 'assets/img/logo.png',
    'titulo': 'Esta es la primera foto',
    'descripcion': 'foto logo'
  },{
    'ruta': 'assets/img/menu_min.png',
    'titulo': 'Esta es la segunda foto',
    'descripcion': 'foto carrito'
  }
]
  constructor() { }
  getImagenes():Observable<ImagenCarousel[]>{
    return of (this.listaImagenes)
  }
}
