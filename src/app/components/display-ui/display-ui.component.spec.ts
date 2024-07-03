import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUiComponent } from './display-ui.component';

describe('DisplayUiComponent', () => {
  let component: DisplayUiComponent;
  let fixture: ComponentFixture<DisplayUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
