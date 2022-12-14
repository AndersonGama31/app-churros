import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  private db: any[] = [
    {
      id: 1,
      nome: "Churros da vó",
      estado: "Ceará",
      pontoVenda: "Barraquinha",
      cidade: "Eusébio",
      horaAbertura: "10:30",
      horaFechamento: "23:00"
    }
  ];

baseUrl ='https://servicodados.ibge.gov.br/api/v1/localidades';

  constructor(private http: HttpClient) { }

  public findAll(): any[]{
    return this.db;
  }
  public insert(ponto: any): void{
    ponto.id = this.db.length+1;
    this.db.push(ponto)
  }

  getStates(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/estados?orderBy=nome`)
  }

  getCidades(){
    const url = `${this.baseUrl}/municipios`;
    return this.http.get<any>(url);
  }

  obterMunicipiosPorUf(id: number): Observable<any[]>{
    return this.http.get<any[]>(
      `${this.baseUrl}/estados/${id}/municipios`
    )
  }

}
