import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDeFundoComponent } from './container-de-fundo.component';

describe('ContainerDeFundoComponent', () => {
  let component: ContainerDeFundoComponent;
  let fixture: ComponentFixture<ContainerDeFundoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerDeFundoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerDeFundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
