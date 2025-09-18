import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCrudComponent } from './new-crud.component';

describe('NewCrudComponent', () => {
  let component: NewCrudComponent;
  let fixture: ComponentFixture<NewCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCrudComponent]
    });
    fixture = TestBed.createComponent(NewCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
