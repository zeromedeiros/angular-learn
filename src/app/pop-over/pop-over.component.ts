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

@Component({
  selector: 'pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.css'],
  animations: [
    trigger('popOverState', [
      transition('* => *', [
        query('p',style({ transform: 'translateX(100%)'})),
        query('p',
          stagger('100ms', [
            animate('500ms', style({ transform: 'translateX(0)'}))
        ]))
      ])
    ])
  ]
})
export class PopOverComponent implements OnInit {

  show: boolean = false;

  constructor() { }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }

  toggle() {
    //alert(this.show);
    this.show = !this.show;    
  }

  ngOnInit() {
  }

}