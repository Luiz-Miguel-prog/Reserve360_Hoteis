import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InscreverPage } from './inscrever.page';

describe('InscreverPage', () => {
  let component: InscreverPage;
  let fixture: ComponentFixture<InscreverPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InscreverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
