import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-eco-score',
  templateUrl: './eco-score.component.html',
  styleUrls: ['./eco-score.component.scss']
})
export class EcoScoreComponent {
  @Input()
  activeScore?: string;
  scores = ['a', 'b', 'c', 'd', 'e'];
}
