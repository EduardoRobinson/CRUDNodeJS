import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chamado } from './chamado.model';
import { environment } from '../../environments/environment';  // Importe o environment

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {
  private apiUrl = environment.apiUrl;  // Use a URL do environment

  constructor(private http: HttpClient) {}

  // Método para obter todos os chamados
  listarChamados(): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(`${this.apiUrl}/chamados`);
  }

  // Método para adicionar um novo chamado
   adicionarChamado(chamado: Chamado): Observable<Chamado> {
    return this.http.post<Chamado>(`${this.apiUrl}/chamados`, chamado);
  }

  // Método para atualizar um chamado existente
  atualizarChamado(id: number, status:string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/chamados/${id}`,{"status":status});
  }

  // Método para excluir um chamado
  excluirChamado(id: number): Observable<Chamado> {
    return this.http.delete<Chamado>(`${this.apiUrl}/chamados/${id}`);
  }
}
