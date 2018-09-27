import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.components.html'
})
export class AgregarComponent {

  nombreLista:string;
  nombreItem:string;	

  constructor(public navCtrl: NavController) {

  }

}
