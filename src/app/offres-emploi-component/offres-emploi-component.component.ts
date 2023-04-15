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
    {reference: 'ref1', titre: 'Full Stack Dev', entreprise: 'wevioo', etat: true},
    {reference: 'ref2', titre: 'UI/UX Designer', entreprise: 'value', etat: true},
    {reference: 'ref3', titre: 'UI/UX Designer', entreprise: 'vmware', etat: false},
    {reference: 'ref4', titre: 'Full Stack Dev', entreprise: 'walmart', etat: false},
    {reference: 'ref5', titre: 'Software Engineer', entreprise: 'sopra', etat: true},
    {reference: 'ref6', titre: 'UI/UX Designer', entreprise: 'expensya', etat: true},
    {reference: 'ref7', titre: 'Cloud Architect', entreprise: 'google', etat: false},
    {reference: 'ref8', titre: 'Devops Engineer', entreprise: 'sofrecom', etat: true},
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
