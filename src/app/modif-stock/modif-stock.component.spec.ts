import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifStockComponent } from './modif-stock.component';

describe('ModifStockComponent', () => {
  let component: ModifStockComponent;
  let fixture: ComponentFixture<ModifStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
