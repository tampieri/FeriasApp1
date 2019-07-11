import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";

@Injectable({
  providedIn: 'root'
})
export class FeriasService {

  constructor(public http: HttpClient) { }


  findAll() {
    return this.http.get<FeriasService[]>(`${API_CONFIG.baseUrl}/ferias/`);
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
