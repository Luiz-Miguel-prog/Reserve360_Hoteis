import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalheshotelPage } from './detalheshotel.page';

describe('DetalheshotelPage', () => {
  let component: DetalheshotelPage;
  let fixture: ComponentFixture<DetalheshotelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalheshotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
