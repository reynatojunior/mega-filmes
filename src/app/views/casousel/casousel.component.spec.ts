import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasouselComponent } from './casousel.component';

describe('CasouselComponent', () => {
  let component: CasouselComponent;
  let fixture: ComponentFixture<CasouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CasouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
