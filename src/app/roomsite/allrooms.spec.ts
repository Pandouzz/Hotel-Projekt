import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Allrooms } from './allrooms';

describe('Allrooms', () => {
  let component: Allrooms;
  let fixture: ComponentFixture<Allrooms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Allrooms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Allrooms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
