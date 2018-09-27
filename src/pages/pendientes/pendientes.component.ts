import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListaDeseoServices} from '../../app/services/lista-deseos.services';
import {AgregarComponent} from'../agregar/agregar.components';
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

}
