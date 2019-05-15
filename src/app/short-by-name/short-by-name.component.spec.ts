import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortByNameComponent } from './short-by-name.component';

describe('ShortByNameComponent', () => {
  let component: ShortByNameComponent;
  let fixture: ComponentFixture<ShortByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
