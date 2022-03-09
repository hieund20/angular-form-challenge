import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforFormComponent } from './infor-form.component';

describe('InforFormComponent', () => {
  let component: InforFormComponent;
  let fixture: ComponentFixture<InforFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InforFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
