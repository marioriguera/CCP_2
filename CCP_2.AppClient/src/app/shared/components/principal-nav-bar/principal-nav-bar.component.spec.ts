import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalNavBarComponent } from './principal-nav-bar.component';

describe('PrincipalNavBarComponent', () => {
  let component: PrincipalNavBarComponent;
  let fixture: ComponentFixture<PrincipalNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
