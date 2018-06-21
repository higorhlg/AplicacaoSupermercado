import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCadastarProdutoComponent } from './formulario-cadastar-produto.component';

describe('FormularioCadastarProdutoComponent', () => {
  let component: FormularioCadastarProdutoComponent;
  let fixture: ComponentFixture<FormularioCadastarProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCadastarProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCadastarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
