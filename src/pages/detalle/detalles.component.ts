import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {Lista} from '../../app/clases/lista';
import {ListaItem} from '../../app/clases/lista-item';
import {ListaDeseoServices} from '../../app/services/lista-deseos.services';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'app-detalle',
  templateUrl: 'detalles.component.html'
})
export class DetalleComponent {
    i:number;
    lista:any;

  constructor(public navCtrl: NavController, public navParams:NavParams, public _listaDeseos:ListaDeseoServices, public alertCtrl:AlertController) {
  	this.i = this.navParams.get('i');
  	this.lista = this.navParams.get('lista');
  }

  actualizar(item:ListaItem){
  	item.completado = !item.completado;
  	let todosMarcados = true;
  	for(let item of this.lista.item){
  		if(!item.completado) {
  			todosMarcados = false;
  			break;
  		}
  	}
  	this.lista.terminada = todosMarcados;
  	this._listaDeseos.actualizarData();
  }
  borrarItem(){
  	const confirm = this.alertCtrl.create({
      title: this.lista.nombre,
      message: 'Estas seguro en borrar la lista?',
      buttons: [
        "Cancelar",
        {
          text: 'Eliminar',
          handler: () => {
            //console.log('Agree clicked');
            this._listaDeseos.eliminarLista(this.i);
            this.navCtrl.pop()
          }
        }
      ]
    });
    confirm.present();
  }
}
