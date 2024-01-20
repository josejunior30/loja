import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesProdutosComponent } from './detalhes-produtos.component';

describe('DetalhesProdutosComponent', () => {
  let component: DetalhesProdutosComponent;
  let fixture: ComponentFixture<DetalhesProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesProdutosComponent]
    });
    fixture = TestBed.createComponent(DetalhesProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
