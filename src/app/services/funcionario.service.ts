import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from "../../config/api.config";

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(public http: HttpClient) { }

  findAll() {
    return this.http.get<FuncionarioService[]>(`${API_CONFIG.baseUrl}/funcionarios/`);
  }

  /*insert(obj: equipeDTO) {
    return this.http.post(`${API_CONFIG.baseUrl}/equipes`,obj,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }*/
}
