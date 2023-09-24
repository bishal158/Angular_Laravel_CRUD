import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { faCircleCheck, faCircleExclamation, faCoffee, faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { CrudServiceService } from 'src/app/services/crud-service.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
// FontAwesome
  faCoffee = faCoffee;
  faUser = faUser;
  faEnvelope =faEnvelope;
  faPhone = faPhone;
  faCircleExclamation = faCircleExclamation;
  faCircleCheck = faCircleCheck;
// Validators
  add_user_form = this.formbuilder.group({
    name:[' ',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
    email:[' ',[Validators.required,Validators.email]],
    phone:[' ',[Validators.required]],
  });

  constructor(private formbuilder: FormBuilder, private crudService: CrudServiceService, private toastr:ToastrService){}

  ngOnInit(): void {
    const nameControl = this.add_user_form.get('name');
    nameControl?.valueChanges.subscribe(_data => {
      this.validateNameControl(nameControl as FormControl)
    })
    const emailControl = this.add_user_form.get('email');
    emailControl?.valueChanges.subscribe(_data => {
      this.validateEmailControl(emailControl as FormControl)
    })
    const phoneControl = this.add_user_form.get('phone');
    phoneControl?.valueChanges.subscribe(_data => {
      this.validatePhoneControl(phoneControl as FormControl)
    })
  }

  getControl(name:any): AbstractControl | null {
    return this.add_user_form.get(name);
  }
  // form submission
  name!: string;
  email!: string;
  phone!: string;
  server_errors:any = [];
  //isLoading:boolean = false;
  //loadingTitle:string = "Loading";
  //no_server_errors = false;
  on_user_submit(){
    //this.isLoading = true;
    //this.loadingTitle = "Saving";
    var user_data = {
      name: this.name,
      email: this.email,
      phone: this.phone
    }
    this.crudService.user_submit(user_data).subscribe({
      next:(_res:any) => {
        this.showSuccess();
        this.add_user_form.reset();
        //this.isLoading = false;

      },
      error:(err:any) =>{
        this.server_errors= err.error.errors;
        //this.isLoading = false;
        console.log(err.error.errors,'errors');
        this.showError()
      }
    });
  }
  // form submission success server side
  showSuccess(){
    this.toastr.success("Successfully Created...")
  }
  // for submission error server side
  showError(){
    this.toastr.error("Something Went Wrong!!!");
  }

  // Error Messages
  name_error_message: string | undefined;
  name_error_alert_msg: boolean | undefined;
  private validateNameControl(nameControl: FormControl): void {
    this.name_error_message = ' ';
    this.name_error_alert_msg = false;
    if (nameControl.invalid && (nameControl.touched || nameControl.dirty)) {
      this.name_error_alert_msg = true;
      if(nameControl.errors?.['required']){
        this.name_error_message= 'Name is required';
      }
      if (nameControl.errors?.['minlength']){
        this.name_error_message = "Minimum length is " + nameControl.errors?.['minlength']?.requiredLength;
      }
      if (nameControl.errors?.['maxlength']) {
        this.name_error_message= 'Password must be at most '+ nameControl.errors?.['maxlength']?.requiredLength+" characters";
      }
    }
  }

  email_error_message: string | undefined;
  email_error_alert_msg: boolean | undefined;
  private validateEmailControl(emailControl: FormControl): void {
    this.email_error_message = ' ';
    this.email_error_alert_msg = false;
    if (emailControl.invalid && (emailControl.touched || emailControl.dirty)) {
      this.email_error_alert_msg = true;
      if(emailControl.errors?.['required']){
        this.email_error_message= 'Email is required';
      }
      if (emailControl.errors?.['email']) {
        this.email_error_message = 'Email is not valid';
      }
    }
  }
  phone_error_message: string | undefined;
  phone_error_alert_msg: boolean | undefined;
  private validatePhoneControl(phoneControl: FormControl): void {
    this.phone_error_message = ' ';
    this.phone_error_alert_msg = false;
    if (phoneControl.invalid && (phoneControl.touched || phoneControl.dirty)) {
      this.phone_error_alert_msg = true;
      if(phoneControl.errors?.['required']){
        this.phone_error_message= 'Phone number is required';
      }

    }
  }
}

