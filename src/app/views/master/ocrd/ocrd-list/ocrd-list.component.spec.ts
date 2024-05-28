import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrdListComponent } from './ocrd-list.component';

describe('OcrdListComponent', () => {
  let component: OcrdListComponent;
  let fixture: ComponentFixture<OcrdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OcrdListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OcrdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
