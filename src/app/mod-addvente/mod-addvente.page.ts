import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mod-addvente',
  templateUrl: './mod-addvente.page.html',
  styleUrls: ['./mod-addvente.page.scss'],
})
export class ModAddventePage implements OnInit {

  addV: FormGroup;
  public isSubmitted: boolean = false;
  vente: any;

  constructor(public formBuilder: FormBuilder, public modalCtrl: ModalController) { 
    this.read_data();
  }

  ngOnInit() {
    this.addV = this.formBuilder.group({
      produit: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      qte: ['', Validators.compose([Validators.minLength(1), Validators.pattern('^[0-9]+$'), Validators.required, Validators.min(1)])] //On force une valeur minimale
  });
  }

  read_data(){
    fetch('./assets/json/produits.json').then(res => res.json())
    .then(json => {
      this.vente = json;
     // console.log(this.data);
    });
  }

  get errorControl() {
    return this.addV.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.addV.valid) {
      console.log('Veuillez remplir tous les champs correctement!')
      return false;
    } else {
      this.dismiss()
    }
  }

  dismiss(){
    console.log(this.addV.value)
    this.modalCtrl.dismiss(this.addV.value)
  }
}
