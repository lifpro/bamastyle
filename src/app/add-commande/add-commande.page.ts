import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.page.html',
  styleUrls: ['./add-commande.page.scss'],
})
export class AddCommandePage implements OnInit {
  clients: {
    id: number, nom: string, numero: number,
    adresse: string,
    longeur: number,
    epaule: number,
    manche: number,
    poitrine: number,
    hanche: number,
    cou: number,
    bras: number,
    poignet: number,
    pantalon: number,
    jupe: number
  }[] = [
      { id: 0, nom: "Aissata DIARRA", numero: 76887654, adresse: "Aci", longeur: 0, epaule: 0, manche: 0, poitrine: 0, hanche: 0, cou: 0, bras: 0, poignet: 0, pantalon: 0, jupe: 0 },
      { id: 1, nom: "Fatimata TOURE", numero: 76887654, adresse: "Sébénicoro", longeur: 0, epaule: 0, manche: 0, poitrine: 0, hanche: 0, cou: 0, bras: 0, poignet: 0, pantalon: 0, jupe: 0 },
      { id: 2, nom: "Fodé DIAKITE", numero: 76887654, adresse: "Hamdalaye", longeur: 0, epaule: 0, manche: 0, poitrine: 0, hanche: 0, cou: 0, bras: 0, poignet: 0, pantalon: 0, jupe: 0 },
      { id: 3, nom: "Adboulkarim SIDIBE", numero: 76887654, adresse: "Yirimadjo", longeur: 0, epaule: 0, manche: 0, poitrine: 0, hanche: 0, cou: 0, bras: 0, poignet: 0, pantalon: 0, jupe: 0 },
      { id: 4, nom: "Moussa DEMBELE", numero: 76887654, adresse: "Medina", longeur: 0, epaule: 0, manche: 0, poitrine: 0, hanche: 0, cou: 0, bras: 0, poignet: 0, pantalon: 0, jupe: 0 },
      { id: 5, nom: "Djénaba BA", numero: 76887654, adresse: "Missira", longeur: 0, epaule: 0, manche: 0, poitrine: 0, hanche: 0, cou: 0, bras: 0, poignet: 0, pantalon: 0, jupe: 0 },
    ];
  models: { id: number, nom: string, prix: number, photo: string }[] = [
    { id: 0, nom: "Création", prix: 15000, photo: "photo0.png" },
    { id: 1, nom: "Abaya", prix: 25000, photo: "photo1.jpg" },
    { id: 2, nom: "Taille basse", prix: 12500, photo: "photo2.jpg" },
    { id: 3, nom: "Robe simple", prix: 5000, photo: "photo3.jpg" },
    { id: 4, nom: "Veste 3 boutons", prix: 50000, photo: "photo4.jpg" },
    { id: 5, nom: "Veste sans poche", prix: 35000, photo: "photo5.jpg" },
  ];
  constructor() { }

  ngOnInit() {
  }
  saveCommande() {
    alert('Commande enregistrée avec succès')
  }
}
