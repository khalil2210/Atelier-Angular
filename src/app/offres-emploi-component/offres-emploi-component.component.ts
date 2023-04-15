import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { Emploi } from '../core/models/emploi';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent {
  constructor(private dialog: MatDialog) {}
  bilan!:number;
  value!:string;
  listEmploi:Emploi[]=[
    {reference: 'ref1', titre: 'Full Stack Dev', entreprise: 'Wevioo', etat: true},
    {reference: 'ref2', titre: 'UI/UX Designer', entreprise: 'Value', etat: true},
    {reference: 'ref3', titre: 'UI/UX Designer', entreprise: 'Google', etat: false},
    {reference: 'ref4', titre: 'Software Engineer', entreprise: 'Sopra', etat: true},
    {reference: 'ref5', titre: 'UI/UX Designer', entreprise: 'Expensya', etat: true},
    {reference: 'ref6', titre: 'Cloud Architect', entreprise: 'Google', etat: false},
    {reference: 'ref7', titre: 'Devops Engineer', entreprise: 'Sofrecom', etat: true},
  ]


  calcBilant(){
  this.bilan=0;
  this.listEmploi.forEach((element)=>{
if(element.etat){
  this.bilan+=1
}
   })

  }
}
