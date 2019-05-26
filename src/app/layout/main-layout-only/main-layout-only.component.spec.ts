import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutOnlyComponent } from './main-layout-only.component';

describe('MainLayoutOnlyComponent', () => {
  let component: MainLayoutOnlyComponent;
  let fixture: ComponentFixture<MainLayoutOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLayoutOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
