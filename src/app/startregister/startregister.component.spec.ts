import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartregisterComponent } from './startregister.component';

describe('StartregisterComponent', () => {
  let component: StartregisterComponent;
  let fixture: ComponentFixture<StartregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
