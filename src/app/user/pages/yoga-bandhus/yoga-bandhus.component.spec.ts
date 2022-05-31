import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaBandhusComponent } from './yoga-bandhus.component';

describe('YogaBandhusComponent', () => {
  let component: YogaBandhusComponent;
  let fixture: ComponentFixture<YogaBandhusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YogaBandhusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaBandhusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
