import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreedHeaderComponent } from './treed-header.component';

describe('TreedHeaderComponent', () => {
  let component: TreedHeaderComponent;
  let fixture: ComponentFixture<TreedHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreedHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
