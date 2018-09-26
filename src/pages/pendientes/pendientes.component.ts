import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListaDeseoServices} from '../../app/services/lista-deseos.services';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html'
})
export class PendientesComponent {

  constructor(private _listaDeseos:ListaDeseoServices) {

  }

}
