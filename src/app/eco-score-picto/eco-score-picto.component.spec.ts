import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EcoScorePictoComponent} from './eco-score-picto.component';

describe('EcoScoreIconComponent', () => {
  let component: EcoScorePictoComponent;
  let fixture: ComponentFixture<EcoScorePictoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EcoScorePictoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EcoScorePictoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
