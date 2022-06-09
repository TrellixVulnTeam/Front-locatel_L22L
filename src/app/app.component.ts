import { Component } from '@angular/core';
import { ServiceLocatelService } from './service/service-locatel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-Locatel';
  Usuario:String="";
  Password:String="";
  constructor(private serviceLocatelService:ServiceLocatelService){
    this.metodo();
  
  }
  metodo(){
    this.serviceLocatelService.getAllUsuario()
    .subscribe(x=>{
      if(x)
        console.log(x);
    })
  }
  login(){
    console.log(this.Usuario + " "+this.Password)
  }
  
}
