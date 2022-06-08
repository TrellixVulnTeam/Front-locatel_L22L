import { Injectable } from '@angular/core';
//import { AuthModule } from './../auth/auth.module';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { NbAuthService, NbAuthToken } from '@nebular/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // constructor(protected http: HttpClient, protected authService: NbAuthService) { }
  constructor(protected http: HttpClient) { }

  protected generateHeaders() {
    let token: string = '';
    // this.authService.onTokenChange()
    //   .subscribe({
    //     next: (nbToken: NbAuthToken) => {
    //       token = nbToken.getValue();
    //     }
    //   });
    return new HttpHeaders()
      .set('Authorization', 'Bearer ' + token);
  }

  getWithResponse<T>(url: string, params?: HttpParams | HttpParams | { [param: string]: string | string[]; }): Observable<HttpResponse<T>> {
    return this.http.get<T>(url, {
      headers: this.generateHeaders(),
      observe: 'response',
      params: params
    });
  }

  getWithResponse2<T>(url: string, params?: HttpParams | HttpParams | { [param: string]: string | string[]; }): Observable<HttpResponse<T>> {
    return this.http.get<T>(url, {
      headers: new HttpHeaders(),
      observe: 'response',
      params: params
    });
  }

  get<T>(url: string, params?: HttpParams | HttpParams | { [param: string]: any; }): Observable<T | null> {
    return this.getWithResponse<T>(url, params)
      .pipe(map(response => this.MostrarNotificacion(response).body));
  }

  MostrarNotificacion<T>(response:HttpResponse<T>):HttpResponse<T>{
    if(response.status)
      // console.log(response.status);
      if(response.status==401)
      { 
          // alert("Ya se vencio la sesión, vuelve a iniciar sesión.");
        // $.toast("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, consequuntur doloremque eveniet eius eaque dicta repudiandae illo ullam. Minima itaque sint magnam dolorum asperiores repudiandae dignissimos expedita, voluptatum vitae velit.")
      //   $.toast({
      //     heading: 'Information',
      //     text: 'Now you can add icons to generate different kinds of toasts',
      //     showHideTransition: 'slide',
      //     icon: 'info'
      // })
      // toastr.options = {
      //   "closeButton": true,
      //   "debug": false,
      //   "newestOnTop": false,
      //   "progressBar": false,
      //   "positionClass": "md-toast-bottom-center",
      //   "preventDuplicates": false,
      //   "onclick": null,
      //   "showDuration": 30000,
      //   "hideDuration": 1000,
      //   "timeOut": 20000,
      //   "extendedTimeOut": 1001,
      //   "showEasing": "swing",
      //   "hideEasing": "linear",
      //   "showMethod": "fadeIn",
      //   "hideMethod": "fadeOut"
      // }
        
      //   setTimeout(function funcionConRetraso() {
      //   alert("Ya se vencio la sesión, vuelve a iniciar sesión.");
      // }, 3000) ;
      }

    return response;
  }

  postWithResponse<T>(url: string, req: any): Observable<HttpResponse<T>> {
    return this.http.post<T>(url, req, {
      headers: this.generateHeaders(),
      observe: 'response'
    });
  }

  post<T>(url: string, req: any): Observable<T | null> {
    return this.postWithResponse<T>(url, req)
      .pipe(map(response => response.body));
  }
}
interface JQueryStatic {
  valHooks: any;
}