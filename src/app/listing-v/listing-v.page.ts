import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import {ModAddclientPage} from '../mod-addclient/mod-addclient.page';
import { File } from 'ionic-native';

@Component({
  selector: 'app-listing-v',
  templateUrl: './listing-v.page.html',
  styleUrls: ['./listing-v.page.scss'],
})
export class ListingVPage implements OnInit {

  data: any

  constructor(public alertController: AlertController, public modalController: ModalController, public storage: Storage, public file: File) { 
    this.read_data();
  }

  ngOnInit() {
  }

  read_data(){
    fetch('./assets/json/test.json').then(res => res.json())
    .then(json => {
      this.data = json;
      console.log(this.data);
    });
  }

  async addItem() {
    const modal = await this.modalController.create({
    component: ModAddclientPage
    });
    modal.onDidDismiss().then(data=>{
    //Appeler la fonction permettant d'ajouter du contenu dans un fichier JSON     
    })
    return await modal.present();
   }

   writeJSON(filename, object) {
    
    //this.file.writeExistingFile(filename, object)
    //Cette fonction n'est pas reconnue
    }
}
