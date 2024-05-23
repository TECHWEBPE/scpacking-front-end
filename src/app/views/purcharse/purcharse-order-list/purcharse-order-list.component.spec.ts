import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurcharseOrderListComponent } from './purcharse-order-list.component';

describe('PurcharseOrderListComponent', () => {
  let component: PurcharseOrderListComponent;
  let fixture: ComponentFixture<PurcharseOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurcharseOrderListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurcharseOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
