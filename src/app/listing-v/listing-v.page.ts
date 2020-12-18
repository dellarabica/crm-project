import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import {ModAddclientPage} from '../mod-addclient/mod-addclient.page';
import {ModAddventePage} from '../mod-addvente/mod-addvente.page';

@Component({
  selector: 'app-listing-v',
  templateUrl: './listing-v.page.html',
  styleUrls: ['./listing-v.page.scss'],
})
export class ListingVPage implements OnInit {

  data: any

  constructor(public alertController: AlertController, public modalController: ModalController, public storage: Storage) { 
    this.read_data();
  }

  ngOnInit() {
  }

  read_data(){
    fetch('./assets/json/clients.json').then(res => res.json())
    .then(json => {
      this.data = json;
     // console.log(this.data);
    });
  }

  async addClient() {
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

    async moreinfo(client){
      let i = this.data.indexOf(client); //On récupère l'ID du client

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Informations',
        message:  `
        <p>Adresse mail : ` + this.data[i].mail + `</p>
        <p>Numéro de téléphone : ` + this.data[i].telephone + `</p>`+   `<p> 
        Entreprise : `+ this.data[i].entreprise + ` </p>`
,
      buttons: [
          {
            text: 'Fermer',
            handler: () => {}
          }
        ]
      })
    
      await alert.present();
      }

      async addVente() {
        const modal = await this.modalController.create({
          component: ModAddventePage
          });
          modal.onDidDismiss().then(data=>{
          //Appeler la fonction permettant d'ajouter du contenu dans un fichier JSON     
          })
          return await modal.present();
      }
}
