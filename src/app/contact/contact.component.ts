import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private http: HttpClient) {}

  contactform = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
  });

  formsent = false;
  formproblem = false;

  ngOnInit(): void {}

  onSubmit() {
    const body = new HttpParams()
      .set('form-name', 'contactform')
      .append('name', this.contactform.value.name)
      .append('email', this.contactform.value.email)
      .append('subject', this.contactform.value.subject)
      .append('message', this.contactform.value.message);

    this.http
      .post('/', body.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      .subscribe(
        (res) => {
          this.formsent = true;
        },
        (err) => {
          if (err instanceof ErrorEvent) {
            //client side error
            this.formproblem = true;
            console.log(err.error.message);
          } else {
            //backend error. If status is 200, then the message successfully sent
            if (err.status === 200) {
              this.formsent = true;
            } else {
              this.formproblem = true;
              console.log('Error status:');
              console.log(err.status);
              console.log('Error body:');
              console.log(err.error);
            }
          }
        }
      );
  }
}
