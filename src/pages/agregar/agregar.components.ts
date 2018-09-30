import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Lista} from '../../app/clases/lista';
import {ListaItem} from '../../app/clases/lista-item';
import { AlertController } from 'ionic-angular';
import {ListaDeseoServices} from '../../app/services/lista-deseos.services';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.components.html'
})
export class AgregarComponent {

  nombreLista:string = "";
  nombreItem:string = "";
  items:ListaItem[] = [];	

  constructor(public navCtrl: NavController, public _listasDeseos:ListaDeseoServices, public alertCtrl:AlertController) {

  }

  agregar(){
  	if(this.nombreItem.length === 0) {
  		return
  	}
  	let item = new ListaItem();
  	item.nombre = this.nombreItem;
  	this.items.push(item);
  	this.nombreItem = "";
  }
  borrarItem(i:number){
  	this.items.splice(i,1);
  }
  guardarLista(){
  	if(this.nombreLista.length === 0) {
  		const alert = this.alertCtrl.create({
	      title: 'Nombre de la lista!',
	      subTitle: 'El nombre de la lista es necesario!',
	      buttons: ['OK']
	    });
	    alert.present();
  		return
  	}
  	else{
  		let lista = new Lista(this.nombreLista);
	  	lista.items = this.items;
	  	//this._listasDeseos.listas.push(lista);
	  	this._listasDeseos.agregarLista(lista);
	  	this.navCtrl.pop();
  	}
  }
}
