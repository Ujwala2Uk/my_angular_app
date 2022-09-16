import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsongComponent } from './allsong.component';

describe('AllsongComponent', () => {
  let component: AllsongComponent;
  let fixture: ComponentFixture<AllsongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllsongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllsongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
