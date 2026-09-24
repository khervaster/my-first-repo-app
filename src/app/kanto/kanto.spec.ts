import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KantoComponent } from './kanto';

describe('Kanto', () => {
  let component: KantoComponent;
  let fixture: ComponentFixture<KantoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KantoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KantoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
