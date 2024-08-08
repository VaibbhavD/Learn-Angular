import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RounterComponent } from './rounter.component';

describe('RounterComponent', () => {
  let component: RounterComponent;
  let fixture: ComponentFixture<RounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
