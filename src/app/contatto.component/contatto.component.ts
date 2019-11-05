import {Component} from '@angular/core'
import {Contatto} from './contatto.model'

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.css']
})

export class ContattoComponent {
  contatto: Contatto = new Contatto('Stefan', 'Tufis', 'david.tufis@marconirovereto.it', '3802225504', 5);



}