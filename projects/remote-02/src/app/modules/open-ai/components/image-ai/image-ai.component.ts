import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-image-ai',
  templateUrl: './image-ai.component.html',
  styleUrls: ['./image-ai.component.scss']
})
export class ImageAiComponent {
  myForm: FormGroup;
  output$: Observable<string>; 

  constructor() {
    this.myForm = new FormGroup({
      inputField: new FormControl('', Validators.required) // Initialize form control
    });
    this.output$ = of(''); // Initialize the output observable
  }

  ngOnInit(): void {
    // Use the form control valueChanges observable to react to input changes
    this.output$ = this.myForm.get('inputField')!.valueChanges.pipe(
      startWith(''), // Start with an initial value
      map(input => `You typed: ${input}`) // Transform the input to the desired output
    );
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      console.log(this.myForm.value); // Here you can handle the form submission
    }
  }
}
