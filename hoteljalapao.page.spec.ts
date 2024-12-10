import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoteljalapaoPage } from './hoteljalapao.page';

describe('HoteljalapaoPage', () => {
  let component: HoteljalapaoPage;
  let fixture: ComponentFixture<HoteljalapaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HoteljalapaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
