import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.scss']
})
export class ValidatorsComponent {
  public reimbursementForm: any = new FormGroup({
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
  });

  protected Validation(formControl: string, value: string) {
    return this.reimbursementForm.get(formControl).hasError(value) && this.reimbursementForm.get(formControl).touched && this.reimbursementForm.get(formControl).invalid;
  }
}
