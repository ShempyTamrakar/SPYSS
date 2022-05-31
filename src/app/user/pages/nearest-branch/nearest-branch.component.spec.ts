import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestBranchComponent } from './nearest-branch.component';

describe('NearestBranchComponent', () => {
  let component: NearestBranchComponent;
  let fixture: ComponentFixture<NearestBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearestBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearestBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
