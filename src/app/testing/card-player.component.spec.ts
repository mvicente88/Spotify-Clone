import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlayerComponent } from '../shared/components/card-player/card-player.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('CardPlayerComponent', () => {
  let component: CardPlayerComponent;
  let fixture: ComponentFixture<CardPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CardPlayerComponent]
    });
    fixture = TestBed.createComponent(CardPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
