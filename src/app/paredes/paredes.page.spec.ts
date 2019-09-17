import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParedesPage } from './paredes.page';

describe('ParedesPage', () => {
  let component: ParedesPage;
  let fixture: ComponentFixture<ParedesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParedesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParedesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
