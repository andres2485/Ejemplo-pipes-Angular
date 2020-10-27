import { Component } from '@angular/core';
import { logWarnings } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  nombre:string='capitan America';

nombre2:string='ClaUdIo AnDREs QueZADa gaRciA';

  arreglo=[1,2,3,4,5,6,7,8,9,10];
  PI: number= Math.PI;
  porcentaje: number =0.235;
  salario :number=1234.5;
  fecha:Date=new Date();

activar:boolean=true;


  idioma:string='en';  // para presionar boton y cambiar el idioma

  videoUrl:string='https://www.youtube.com/embed/4TXc2jmhBIw';

valorPromesa = new Promise<string>((resolve)=>{

setTimeout(()=>{

resolve('llgo la data');

},4500);

})


  heroe={

nombre:'logan',
clave:'wolverine',
edad:500,
direccion:{

  calle:'Primera',
  casa:20
}


  }
}
