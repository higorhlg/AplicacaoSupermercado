import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Produto } from "../model/produto.model";


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http:HttpClient) {
    
  
  }
  public save(produto:Produto):Observable<Produto>{
   return this.http.post<Produto>('http://localhost:3001/produto',produto)
  }
  public getAll():Observable<Produto[]>{
    return this.http.get<Produto[]>('http://localhost:3001/produtos')
  }
  public update(produto:Produto):Observable<Produto>{
    return this.http.patch<Produto>(`http://localhost:3001/produto/${produto._id}`,produto)
  }
  public delete(produto:Produto): Observable<any>{
    
  return this.http.delete<Produto>(`http://localhost:3001/produto/${produto._id}`)
    
  }
}
