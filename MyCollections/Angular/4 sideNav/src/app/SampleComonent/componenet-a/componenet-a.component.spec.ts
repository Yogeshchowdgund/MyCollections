import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenetAComponent } from './componenet-a.component';

describe('ComponenetAComponent', () => {
  let component: ComponenetAComponent;
  let fixture: ComponentFixture<ComponenetAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenetAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenetAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
