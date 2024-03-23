import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAiComponent } from './text-ai.component';

describe('TextAiComponent', () => {
  let component: TextAiComponent;
  let fixture: ComponentFixture<TextAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
