import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JalapaoPage } from './jalapao.page';

describe('JalapaoPage', () => {
  let component: JalapaoPage;
  let fixture: ComponentFixture<JalapaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JalapaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
