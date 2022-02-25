import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clients } from '../models/clients';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.page.html',
  styleUrls: ['./edit-client.page.scss'],
})
export class EditClientPage implements OnInit {
  idClient: string;
  cl: Clients;
  clients: { id: number, nom: string, numero: number, adresse: string }[] = [
    { id: 0, nom: "Aissata DIARRA", numero: 76887654, adresse: "Aci" },
    { id: 1, nom: "Fatimata TOURE", numero: 76887654, adresse: "Sébénicoro" },
    { id: 2, nom: "Fodé DIAKITE", numero: 76887654, adresse: "Hamdalaye" },
    { id: 3, nom: "Adboulkarim SIDIBE", numero: 76887654, adresse: "Yirimadjo" },
    { id: 4, nom: "Moussa DEMBELE", numero: 76887654, adresse: "Medina" },
    { id: 5, nom: "Djénaba BA", numero: 76887654, adresse: "Missira" },
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let idClient = this.route.snapshot.paramMap.get('id');
    this.cl = this.clients.find(function (c) {
      return c.id == parseInt(idClient);
    })
  }

}
