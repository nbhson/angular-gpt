import { Component, OnInit } from '@angular/core';
import { CompletionService } from './services/completion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isEmpty } from './util/app.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  textDisplay: string = '';
  errorDisplay: string = '';
  messageQuestion: string = '';
  animationText: string = '';
  form!: FormGroup;
  loading: boolean = false;

  constructor(
    private completionService: CompletionService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  createCompletion(prompt: string) {
    if (!isEmpty(prompt)) {
      this.loading = true;
      this.animationText = prompt;
      this.textDisplay = '';
      this.messageQuestion = '';
      this.completionService.createCompletion(prompt).subscribe(
        (result) => {
          this.textDisplay = result;
          this.loading = false;
        },
        (error) => {
          this.errorDisplay = error;
          this.loading = false;
        }
      );
    } else {
      // show toast
    }
  }

  initForm() {
    this.form = this._formBuilder.group({
      messageQuestion: [
        this.messageQuestion,
        Validators.compose([Validators.required]),
      ],
    });
  }

  submit() {
    this.createCompletion(this.messageQuestion);
  }

  record() {}

  handleDisplayAnswer() {
    if (this.textDisplay) {
      return this.textDisplay;
    }
    return '';
  }
}
