import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

baseUrl ='https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome';

  constructor(private http: HttpClient) { }

  findAll(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`)
  }
}
