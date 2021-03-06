import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";

@Injectable({
  providedIn: 'root'
})

export class EquipeService {

  constructor(public http: HttpClient) { }


  findAll() {
    return this.http.get<EquipeService[]>(`${API_CONFIG.baseUrl}/equipes/`);
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
