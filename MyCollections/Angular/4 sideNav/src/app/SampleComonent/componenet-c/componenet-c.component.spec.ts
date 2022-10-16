import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenetCComponent } from './componenet-c.component';

describe('ComponenetCComponent', () => {
  let component: ComponenetCComponent;
  let fixture: ComponentFixture<ComponenetCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenetCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenetCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
