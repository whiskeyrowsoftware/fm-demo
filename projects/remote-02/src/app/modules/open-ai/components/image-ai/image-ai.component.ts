import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { OpenAiDataService } from '../../services/open-ai.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-image-ai',
  templateUrl: './image-ai.component.html',
  styleUrls: ['./image-ai.component.scss']
})
export class ImageAiComponent {
  myForm!: FormGroup
  output$!: Observable<string>
  inProgress: boolean = false;
  theImageResult: string = ''
  defValue: string ="create an image that shows two angels flying over a planet with a purple sky and white clouds"
  
  constructor(private openAiDS: OpenAiDataService,
              private snackBar: MatSnackBar) {
    this.initFormGroup(); // Initialize the output observable
  }

  private initFormGroup() {
    this.myForm = new FormGroup({
      inputField: new FormControl('', Validators.required),
      inputKey: new FormControl('', Validators.required) // Initialize form control
    });
    this.output$ = of('');
  }

  ngOnInit(): void {
    this.output$ = this.myForm.controls['inputField'].valueChanges.pipe(
      startWith(''),
      map(input => {
        return this.countWords(input);
      })
    );
  }
  ngAfterViewInit(){
    setTimeout(() => {
      this.myForm.controls['inputField'].setValue(this.defValue)
      this.myForm.controls['inputField'].enable()
    });
  }
  private countWords(input: any) {
    const words = input.trim().split(/\s+/);
    // Count the words, filtering out any empty strings that may result from multiple consecutive spaces.
    const wordCount = words.filter((word: string | any[]) => word.length > 0).length;
    return `${wordCount}`;
  }

  displayToast(message: string, action: string = 'Close', duration: number = 3000) {
    this.snackBar.open(message, action, {
      duration: duration,
    });
  }
  onSubmit(): void {
    if (this.myForm.valid) {
      const apiKey = this.myForm.controls['inputKey'].value; // Ideally, fetch this securely from your environment or server
      const description = this.myForm.controls['inputField'].value;
      this.inProgress=true;
      this.openAiDS.generateImage(description, apiKey).subscribe({
        next: (response: any) => {
          this.displayToast("Your Image Is Below :)",'Close',3000);
          this.theImageResult = response.data[0].url
          this.inProgress=false;
        },
        error: (error) => {
          this.inProgress = false;
          this.displayToast(error.message,'Close',5000);
        }
      });
    } else {
      this.displayToast('You need to enter some TEXT & a valid API Key','Close',5000);
    }
  }
}
