import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayListHeaderComponent } from '../shared/components/play-list-header/play-list-header.component';

describe('PlayListHeaderComponent', () => {
  let component: PlayListHeaderComponent;
  let fixture: ComponentFixture<PlayListHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayListHeaderComponent]
    });
    fixture = TestBed.createComponent(PlayListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
