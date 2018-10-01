import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListaDeseoServices} from '../../app/services/lista-deseos.services';
import {AgregarComponent} from'../agregar/agregar.components';
import {DetalleComponent} from'../detalle/detalles.component';
@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html'
})
export class PendientesComponent {

  constructor(private _listaDeseos:ListaDeseoServices, private navCtrl:NavController) {

  }
  ngOnInit(){}

  irAgregar(){
  	this.navCtrl.push(AgregarComponent);
  }
  verDetalle(lista,i){
  	this.navCtrl.push(DetalleComponent,{lista,i})
  }
}
