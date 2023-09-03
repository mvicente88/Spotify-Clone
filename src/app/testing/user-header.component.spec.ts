import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHeaderComponent } from '../shared/components/user-header/user-header.component';

describe('UserHeaderComponent', () => {
  let component: UserHeaderComponent;
  let fixture: ComponentFixture<UserHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserHeaderComponent]
    });
    fixture = TestBed.createComponent(UserHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
