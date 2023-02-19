import { Injectable } from '@angular/core';
import { Observable, delay, map } from 'rxjs';
import { CompletionAPI } from 'src/api/completion.api';

@Injectable({
  providedIn: 'root',
})
export class CompletionService {
  constructor(private completionAPI: CompletionAPI) {}

  createCompletion(prompt: string): Observable<any> {
    return this.completionAPI.createCompletion(prompt).pipe(
      delay(1500),
      map((completion) => {
        return completion.data.choices[0].text;
      })
    );
  }
}
