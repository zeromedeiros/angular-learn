import { Component, OnInit } from '@angular/core';
import { 
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  query,
  stagger
} from '@angular/animations';

import { PopperService } from './popper.service';

@Component({
  selector: 'pop-over',  
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.css'],
  animations: [
    trigger('popOverState', [
      transition('* => *', [
        query('div',style({ transform: 'translateX(100%)'})),
        query('div',
          stagger('1000ms', [
            animate('1000ms', style({ transform: 'translateX(0%)'}))
        ]))
      ])
    ])
  ]
})
export class PopOverComponent  {

  show: boolean;
  nomeTreco: string;
  lista: string[];

  constructor(private PopperService: PopperService) {
    this.show = false;
    this.nomeTreco = 'Treco';

    this.lista = this.PopperService.getCoisa();
  }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }

  toggle() {
    //alert(this.show);
    this.show = !this.show;    
  }

}