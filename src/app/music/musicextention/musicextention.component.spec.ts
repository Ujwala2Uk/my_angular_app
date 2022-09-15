import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicextentionComponent } from './musicextention.component';

describe('MusicextentionComponent', () => {
  let component: MusicextentionComponent;
  let fixture: ComponentFixture<MusicextentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicextentionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicextentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
