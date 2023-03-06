import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const authReq = req.clone(
            this.httpOption()
            // headers: req.headers.set('Content-Type',  'application/json')
          );
          return next.handle(authReq).pipe(
            map((event:HttpEvent<any>)=>{
                if(event instanceof HttpResponse){
                    sessionStorage.setItem('alerted','No');
                    if(event.body.responseCode == 401){
                        alert("Your session has expired")
                    }
                }
                return event;
            }),
            catchError((error: HttpErrorResponse)=>{
                return throwError(error);
            })
          );
    }
    httpOption(){
        let token = localStorage.getItem('access_token');
        if(token){
            return{
                headers: new HttpHeaders({
                    'Authorization': token
                })
            }
        }
        else{
            return {
                headers: new HttpHeaders({
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Methods": "GET, POST, UPDATE, DELETE",
                    "Access-Control-Allow-Origin": "*"
                })
            }
        }
    }
    
}