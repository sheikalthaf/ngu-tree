import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreedGroupComponent } from './treed-group.component';

describe('TreedGroupComponent', () => {
  let component: TreedGroupComponent;
  let fixture: ComponentFixture<TreedGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreedGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreedGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
