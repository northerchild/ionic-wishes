import {Injectable} from '@angular/core';
import {Lista} from '../clases/lista';
@Injectable()
export class ListaDeseoServices{
	listas:Lista[] = [];
	constructor(){
		let lista1 = new Lista('Compras de sumpermercado');
		let lista2 = new Lista('Videojuegos que deseo');
		let lista3 = new Lista('Tareas de la universidad');
		this.listas.push(lista1);
		this.listas.push(lista2);
		this.listas.push(lista3);
		console.log("Servicio iniciado")
	}
}