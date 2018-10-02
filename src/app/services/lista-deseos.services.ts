import {Injectable} from '@angular/core';
import {Lista} from '../clases/lista';
@Injectable()
export class ListaDeseoServices{
	listas:Lista[] = [];
	constructor(){
		//let lista1 = new Lista('Compras de sumpermercado');
		//let lista2 = new Lista('Videojuegos que deseo');
		//let lista3 = new Lista('Tareas de la universidad');
		//this.listas.push(lista1);
		//this.listas.push(lista2);
		//this.listas.push(lista3);
		this.cargarData();
		console.log("Servicio iniciado")
	}
	actualizarData(){
		localStorage.setItem('data',JSON.stringify(this.listas));
	}
	cargarData(){
		if(localStorage.getItem("data")) {
			this.listas = JSON.parse(localStorage.getItem("data"));
		}
	}
	agregarLista(lista:Lista){
		this.listas.push(lista);
		this.actualizarData();
	}
	eliminarLista(i:number){
		this.listas.splice(i,1);
		this.actualizarData();
	}
}