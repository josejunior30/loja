import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorpaginaComponent } from './errorpagina.component';

describe('ErrorpaginaComponent', () => {
  let component: ErrorpaginaComponent;
  let fixture: ComponentFixture<ErrorpaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorpaginaComponent]
    });
    fixture = TestBed.createComponent(ErrorpaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
