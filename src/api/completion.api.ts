import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { openai } from 'src/config/openai.config';

@Injectable({
  providedIn: 'root',
})
export class CompletionAPI {
  constructor() {}

  createCompletion(prompt: string): Observable<any> {
    const completion = openai.createCompletion({
      model: "text-davinci-001",
      prompt: prompt,
      temperature: .7,
      max_tokens: 2000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    return from(completion);
  }
}
