import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorWangComponent } from './editor-wang.component';

describe('EditorWangComponent', () => {
  let component: EditorWangComponent;
  let fixture: ComponentFixture<EditorWangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorWangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorWangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
