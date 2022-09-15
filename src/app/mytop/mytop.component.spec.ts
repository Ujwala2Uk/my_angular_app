import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytopComponent } from './mytop.component';

describe('MytopComponent', () => {
  let component: MytopComponent;
  let fixture: ComponentFixture<MytopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MytopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MytopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
