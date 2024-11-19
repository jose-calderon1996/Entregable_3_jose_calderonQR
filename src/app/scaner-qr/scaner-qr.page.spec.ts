import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScanerQRPage } from './scaner-qr.page';

describe('ScanerQRPage', () => {
  let component: ScanerQRPage;
  let fixture: ComponentFixture<ScanerQRPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanerQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
