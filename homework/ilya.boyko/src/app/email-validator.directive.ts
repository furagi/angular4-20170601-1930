import { Directive, forwardRef } from '@angular/core';
import { NG_ASYNC_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { Observable } from "rxjs";
import 'rxjs/add/operator/debounceTime';

@Directive({
  selector: '[appEmailValidator][ngModel]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => EmailValidatorDirective),
      multi: true
    }
  ]
})
export class EmailValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): Observable<{[key : string] : any}> {
    return new Observable(observer => {
      if( control.value === "mail@mail.com" ) {
        observer.next({asyncInvalid: true});
      } else {
        observer.next(null);
      }
    }).debounceTime(500).first();
  }

}