import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularChessHeaderComponent } from './angular-chess-header.component';

describe('AngularChessHeaderComponent', () => {
  let component: AngularChessHeaderComponent;
  let fixture: ComponentFixture<AngularChessHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularChessHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularChessHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Angular Chess Header component', () => {
    expect(component).toBeTruthy();
  });
});
