import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenetDComponent } from './componenet-d.component';

describe('ComponenetDComponent', () => {
  let component: ComponenetDComponent;
  let fixture: ComponentFixture<ComponenetDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenetDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenetDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
