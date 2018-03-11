import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreedBodyComponent } from './treed-body.component';

describe('TreedBodyComponent', () => {
  let component: TreedBodyComponent;
  let fixture: ComponentFixture<TreedBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreedBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreedBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
