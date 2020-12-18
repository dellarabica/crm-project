import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import {ModAddentreprisePage} from '../mod-addentreprise/mod-addentreprise.page';
import {ModAddventePage} from '../mod-addvente/mod-addvente.page';

@Component({
  selector: 'app-listing-e',
  templateUrl: './listing-e.page.html',
  styleUrls: ['./listing-e.page.scss'],
})
export class ListingEPage implements OnInit {

  data: any

  constructor(public alertController: AlertController, public modalController: ModalController, public storage: Storage) { 
    this.read_data();
  }

  ngOnInit() {
  }

  read_data(){
    fetch('./assets/json/entreprises.json').then(res => res.json())
    .then(json => {
      this.data = json;
     // console.log(this.data);
    });
  }

  async addClient() {
    const modal = await this.modalController.create({
    component: ModAddentreprisePage
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

    async moreinfo(entr){
      let i = this.data.indexOf(entr); //On récupère l'ID du client

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Informations',
        message:  `
        <p>Adresse : ` + this.data[i].adresse + `</p>
        <p>Code postal : ` + this.data[i].cp + `</p>`+ 
          `<p> Ville : `+ this.data[i].ville + ` </p>`
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

      doRefresh(event) {
        console.log('Refreshing...');
    
        setTimeout(() => {
          console.log('Impossible de rafraîchir');
          event.target.complete();
        }, 2000);
      }
}
