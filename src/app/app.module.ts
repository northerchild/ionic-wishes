import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//servicios
import {ListaDeseoServices} from './services/lista-deseos.services'

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {PendientesComponent} from'../pages/pendientes/pendientes.component';
import {TerminadoComponent} from'../pages/terminados/terminado.component';
import {AgregarComponent} from'../pages/agregar/agregar.components';
import {DetalleComponent} from'../pages/detalle/detalles.component';

//Pipes
import {PlaceHolderPipe} from './pipes/placeholder.pipe';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PendientesComponent,
    TerminadoComponent,
    AgregarComponent,
    DetalleComponent,
    PlaceHolderPipe,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PendientesComponent,
    TerminadoComponent,
    AgregarComponent,
    DetalleComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaDeseoServices,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
