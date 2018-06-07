import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInternasComponent } from './header-internas.component';

describe('HeaderInternasComponent', () => {
  let component: HeaderInternasComponent;
  let fixture: ComponentFixture<HeaderInternasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderInternasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderInternasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
