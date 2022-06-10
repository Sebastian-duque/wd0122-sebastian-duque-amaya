import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoingmodalComponent } from './loingmodal.component';

describe('LoingmodalComponent', () => {
  let component: LoingmodalComponent;
  let fixture: ComponentFixture<LoingmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoingmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoingmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
