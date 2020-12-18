import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mod-addentreprise',
  templateUrl: './mod-addentreprise.page.html',
  styleUrls: ['./mod-addentreprise.page.scss'],
})
export class ModAddentreprisePage implements OnInit {


addE: FormGroup

public isSubmitted: boolean = false;

constructor(public formBuilder: FormBuilder, public modalCtrl: ModalController) {}

ngOnInit() {
  this.addE = this.formBuilder.group({
    nom: ['', Validators.compose([Validators.minLength(2), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    adresse: ['', Validators.compose([Validators.pattern('^[0-9]{1,3}[a-zA-Z ]+$'), Validators.required])],
    cp: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(5), Validators.pattern('^[0-9]+$'), Validators.required])],
    ville: ['', Validators.compose([Validators.minLength(1), Validators.pattern('[a-zA-Z\-]*'), Validators.required])]
});
}

get errorControl() {
  return this.addE.controls;
}

submitForm() {
  this.isSubmitted = true;
  if (!this.addE.valid) {
    console.log('Veuillez remplir tous les champs correctement!')
    return false;
  } else {
    this.dismiss()
  }
}

dismiss(){
  console.log(this.addE.value)
  this.modalCtrl.dismiss(this.addE.value)
}


}
