import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendCrudComponent } from './backend-crud.component';

describe('BackendCrudComponent', () => {
  let component: BackendCrudComponent;
  let fixture: ComponentFixture<BackendCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackendCrudComponent]
    });
    fixture = TestBed.createComponent(BackendCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
