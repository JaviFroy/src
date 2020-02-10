import { Component, OnInit } from '@angular/core';
import {ImagenCarousel} from '../../clases/imagen-carousel';
import { GestionarCarouselService } from '../../servicios/gestionar-carousel.service';

@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.css']
})
export class CentralComponent implements OnInit {
  imagenesCarousel:ImagenCarousel[];

  constructor(
    private gestionarCarouselServicio:GestionarCarouselService
  ) { }

  ngOnInit() {
    this.getImagenesLocal();
  }
  getImagenesLocal(){
    this.gestionarCarouselServicio.getImagenes().subscribe(
      lista=>this.imagenesCarousel=lista
    );
  }
}
