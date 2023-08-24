import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedNotesComponent } from './shared-notes.component';

describe('SharedNotesComponent', () => {
  let component: SharedNotesComponent;
  let fixture: ComponentFixture<SharedNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedNotesComponent]
    });
    fixture = TestBed.createComponent(SharedNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
