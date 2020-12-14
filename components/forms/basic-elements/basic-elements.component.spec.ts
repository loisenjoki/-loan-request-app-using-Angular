import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicelementsComponent } from './basicelements.component';

describe('BasicElementsComponent', () => {
  let component: BasicelementsComponent;
  let fixture: ComponentFixture<BasicelementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicelementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicelementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});