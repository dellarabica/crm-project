import { Injectable } from '@angular/core';
import DataClients from '../assets/json/clients.json'
import DataVendeurs from '../assets/json/vendeurs.json'
import {Client} from './models/client'
import {Vendeur} from './models/vendeur'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private persontab: Array<any>

  constructor() {

   }

  getPeople(){
    this.persontab.push(DataClients)
    this.persontab.push(DataVendeurs)
    return this.persontab
  }

  getcustomer(){
    return DataClients
  }

  getsellers(){
    return DataVendeurs
  }

}
