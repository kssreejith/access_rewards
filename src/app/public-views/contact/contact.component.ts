import { Component, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'app/shared/services/contact.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  signupForm: FormGroup;
  public disableClick = false;

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef, private fb: FormBuilder, public contactService: ContactService) {

    // Use the formbuilder to build the Form model
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    });
    this.toastr.setRootViewContainerRef(vcr);
  }

  public onFormSubmit() {

    console.log(this.signupForm.value);
    this.disableClick = true;

    let responseData: any;
    this.contactService.createContactUs('http://www.myaccessrewards.com/accessrewards/index.php/Api/v1.1/contactMail',
      this.signupForm.value).subscribe(
      data => responseData = data,
      error => {
        this.disableClick = false;

        console.error('api ERROR');
        this.showError();
      },
      () => {
        this.disableClick = false;

        console.log('responseData', responseData.status);
        this.showSuccess();
      });

  }
  showSuccess() {
    this.toastr.success('Mail send successfully', 'Success!');
  }

  showError() {
    this.toastr.error('Something went wrong, Please try again.', 'Oops!');
  }

}
