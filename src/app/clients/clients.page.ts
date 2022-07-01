import { Component, OnInit } from '@angular/core';
import { ClientsExeterneService } from './clients-exeterne.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {
  clients: { id: number, nom: string, numero: number, adresse: string }[] = [
    { id: 0, nom: "Aissata DIARRA", numero: 76887654, adresse: "Aci" },
    { id: 1, nom: "Fatimata TOURE", numero: 76887654, adresse: "Sébénicoro" },
    { id: 2, nom: "Fodé DIAKITE", numero: 76887654, adresse: "Hamdalaye" },
    { id: 3, nom: "Adboulkarim SIDIBE", numero: 76887654, adresse: "Yirimadjo" },
    { id: 4, nom: "Moussa DEMBELE", numero: 76887654, adresse: "Medina" },
    { id: 5, nom: "Djénaba BA", numero: 76887654, adresse: "Missira" },
  ];

  clientEx = [];
  constructor(protected srv: ClientsExeterneService) { }

  ngOnInit() {
    this.srv.getClients().subscribe(reponse => {
      console.log(reponse);
      this.clientEx = this.formatData(reponse);
      console.log(this.clientEx);
    });
  }





  formatData(data): any[] | any {
    if (data && data.hasOwnProperty('content')) {
      return data.content;
    } else {
      return data;
    }
  }


}
