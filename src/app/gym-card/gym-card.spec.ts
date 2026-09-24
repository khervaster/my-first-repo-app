import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GymCardComponent } from './gym-card';

describe('GymCard', () => {
  let component: GymCardComponent;
  let fixture: ComponentFixture<GymCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GymCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
