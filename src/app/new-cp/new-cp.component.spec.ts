import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCpComponent } from './new-cp.component';

describe('NewCpComponent', () => {
  let component: NewCpComponent;
  let fixture: ComponentFixture<NewCpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCpComponent]
    });
    fixture = TestBed.createComponent(NewCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
