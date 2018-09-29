import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Lista} from '../../app/clases/lista';
import {ListaItem} from '../../app/clases/lista-item';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.components.html'
})
export class AgregarComponent {

  nombreLista:string;
  nombreItem:string = "";
  items:ListaItem[] = [];	

  constructor(public navCtrl: NavController) {

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

}
