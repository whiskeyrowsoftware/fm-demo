import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rm01StandaloneComponent } from './rm01-standalone.component';

describe('Rm01StandaloneComponent', () => {
  let component: Rm01StandaloneComponent;
  let fixture: ComponentFixture<Rm01StandaloneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Rm01StandaloneComponent]
    });
    fixture = TestBed.createComponent(Rm01StandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
