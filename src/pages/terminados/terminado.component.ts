import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListaDeseoServices} from '../../app/services/lista-deseos.services';
import {DetalleComponent} from'../detalle/detalles.component';

@Component({
  selector: 'app-terminado',
  templateUrl: 'terminado.component.html'
})
export class TerminadoComponent {

  constructor(private _listaDeseos:ListaDeseoServices, private navCtrl:NavController) {

  }
    verDetalle(lista,i){
  	this.navCtrl.push(DetalleComponent,{lista,i})
  }
}
