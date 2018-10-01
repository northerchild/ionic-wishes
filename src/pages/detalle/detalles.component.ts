import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalles.component.html'
})
export class DetalleComponent {
    i:number;
    lista:any;

  constructor(public navCtrl: NavController, public navParams:NavParams) {
  	this.i = this.navParams.get('i');
  	this.lista = this.navParams.get('lista');
  }

}
