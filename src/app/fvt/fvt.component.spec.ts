import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FvtComponent } from './fvt.component';

describe('FvtComponent', () => {
  let component: FvtComponent;
  let fixture: ComponentFixture<FvtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FvtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FvtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
