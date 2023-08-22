import { Injectable } from '@angular/core';

export interface IErrorReporter {
  behaviour: 'save' | 'edit' | 'update' | 'get' | 'delete';
  errorLocation: string;
  handleData: any;
  errorMessage: any;
}

@Injectable({
  providedIn: 'root',
})
export class ErrorReporterService {
  constructor() {}

  public saveNewError(behavior: IErrorReporter) {}
}
