import {Component, Input} from '@angular/core';
import {EcoScore} from "../eco-score/eco-score.component";

@Component({
  selector: 'app-eco-score-picto',
  templateUrl: './eco-score-picto.component.html',
  styleUrls: ['./eco-score-picto.component.scss']
})
export class EcoScorePictoComponent {

  @Input()
  score?: EcoScore;
  @Input()
  sizeInPixels = 32;

}
