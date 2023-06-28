import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStandAloneComponent } from './my-stand-alone.component';

describe('MyStandAloneComponent', () => {
  let component: MyStandAloneComponent;
  let fixture: ComponentFixture<MyStandAloneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MyStandAloneComponent]
    });
    fixture = TestBed.createComponent(MyStandAloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
