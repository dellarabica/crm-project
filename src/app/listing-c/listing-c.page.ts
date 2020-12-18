import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Client} from '../models/client';
import {Vendeur} from '../models/vendeur'


@Component({
  selector: 'app-listing-c',
  templateUrl: './listing-c.page.html',
  styleUrls: ['./listing-c.page.scss'],
})
export class ListingCPage implements OnInit {

  private all: Array<any>
  private tabcust: Array<any>
  private tabsellers: Array<any>
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.all = this.api.getPeople() 
    this.tabcust = this.api.getcustomer()
    this.tabsellers = this.api.getsellers()
  }

  segmentChanged(ev: any){
    let seg = ev.detail.value

  }

}
