import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { NbAuthService } from '@nebular/auth';
import { Observable } from 'rxjs';
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
    //return this.http.get("http:192.168.0.15:8080/",{
     // params:param,
      //headers:new Headers(),
      //responseType:'json'
    //});
    return this.getWithResponse<Usuario[]>("api/demo/AllUsuario", param)
    .pipe(map(response => response.body));
  }
}
interface Usuario{
  id:number,
  bactivo:boolean,
  tpassword:String,
  tnombreUsuario:String,
  taliasUsuario:String
}
