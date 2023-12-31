import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericSectionComponent } from '../shared/components/generic-section/generic-section.component';

describe('GenericSectionComponent', () => {
  let component: GenericSectionComponent;
  let fixture: ComponentFixture<GenericSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericSectionComponent]
    });
    fixture = TestBed.createComponent(GenericSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
