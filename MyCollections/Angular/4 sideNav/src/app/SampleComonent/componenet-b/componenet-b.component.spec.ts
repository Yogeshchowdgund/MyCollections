import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenetBComponent } from './componenet-b.component';

describe('ComponenetBComponent', () => {
  let component: ComponenetBComponent;
  let fixture: ComponentFixture<ComponenetBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenetBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenetBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
