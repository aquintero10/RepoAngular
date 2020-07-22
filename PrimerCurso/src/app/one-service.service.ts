import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICourse } from './course';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError as ObservableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OneServiceService {

  url = 'assets/data/courses.json';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<ICourse[]>{
      return this.http
                  .get<ICourse[]>(this.url)
                  .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return ObservableThrowError(error.message);
  }
}
