import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Venda } from "../model/venda.model";


@Injectable({
  providedIn: 'root'
})
export class VendaService {

  constructor(private http:HttpClient) {
    
  
  }
  public save(venda:Venda):Observable<Venda>{
   return this.http.post<Venda>('http://localhost:3001/venda',venda)
  }
  public getAll():Observable<Venda[]>{
    return this.http.get<Venda[]>('http://localhost:3001/vendas')
  }
  public update(venda:Venda):Observable<Venda>{
    return this.http.patch<Venda>(`http://localhost:3001/produto/${venda._id}`,venda)
  }
  public delete(venda:Venda): Observable<any>{
    
  return this.http.delete<Venda>(`http://localhost:3001/produto/${venda._id}`)
    
  }
}
