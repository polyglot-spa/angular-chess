import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedConfigModalComponent } from './advanced-config-modal.component';

describe('AdvancedConfigModalComponent', () => {
  let component: AdvancedConfigModalComponent;
  let fixture: ComponentFixture<AdvancedConfigModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedConfigModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedConfigModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Advanced Config Modal component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with the proper values in the NgModel', () => {
    expect(component.fen).toBe('');
    expect(component.color).toBe('white');
    expect(component.selfPlay).toBe(false);
  });
});
