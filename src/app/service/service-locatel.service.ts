import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { NbAuthService } from '@nebular/auth';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceLocatelService extends ApiService{

  constructor(http: HttpClient) {
    super(http)
  }

  getAllUsuario():Observable<Usuario[]|null>{
    const param=new HttpParams();
    return this.http.get<Usuario[]>("demo/AllUsuario")
    
  }

  PostLogin():Observable<String|null>{
    return of("");
  }

  GetCuenta():Observable<String|null>{
    return of("");
  }
  GetMovimiento(){
    
  }
}

interface Usuario{
  id:number,
  bactivo:boolean,
  tpassword:String,
  tnombreUsuario:String,
  taliasUsuario:String
}
