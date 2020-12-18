import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mod-addclient',
  templateUrl: './mod-addclient.page.html',
  styleUrls: ['./mod-addclient.page.scss'],
})
export class ModAddclientPage implements OnInit {

  addCl: FormGroup

  public isSubmitted: boolean = false;

	constructor(public formBuilder: FormBuilder, public modalCtrl: ModalController) {}

  ngOnInit() {
    this.addCl = this.formBuilder.group({
      prenom: ['', Validators.compose([Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      nom: ['', Validators.compose([Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      mail: ['', Validators.compose([Validators.email, Validators.required])],
      telephone: ['', Validators.compose([Validators.maxLength(10), Validators.pattern('^[0-9]+$'), Validators.required])]
  });
  }

  get errorControl() {
    return this.addCl.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.addCl.valid) {
      console.log('Veuillez remplir tous les champs correctement!')
      return false;
    } else {
      this.dismiss()
    }
  }

  dismiss(){
    console.log(this.addCl.value)
    this.modalCtrl.dismiss(this.addCl.value)
  }
}
