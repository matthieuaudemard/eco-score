import {Component, Input} from '@angular/core';

export const EcoScores = ['A', 'B', 'C', 'D', 'E'] as const;
export type EcoScore = typeof EcoScores[number];


@Component({
  selector: 'app-eco-score',
  templateUrl: './eco-score.component.html',
  styleUrls: ['./eco-score.component.scss']
})
export class EcoScoreComponent {
  @Input()
  activeScore?: EcoScore;
  scores = [...EcoScores.values()];


}
