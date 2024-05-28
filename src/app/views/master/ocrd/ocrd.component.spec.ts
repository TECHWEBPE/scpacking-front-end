import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrdComponent } from './ocrd.component';

describe('OcrdComponent', () => {
  let component: OcrdComponent;
  let fixture: ComponentFixture<OcrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OcrdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OcrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
