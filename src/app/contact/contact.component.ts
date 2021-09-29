import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SendEmailService } from '../send-email.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private sendservice: SendEmailService) { }

  ngOnInit(): void {
    AOS.init();
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup( {
      first: new FormControl('', [Validators.required]),
      last: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl ('',[Validators.required]),
      message: new FormControl('',[Validators.required],)
    });
  }

  sendProcess(){
    if(this.formGroup.valid) {
      this.sendservice.send(this.formGroup.value).subscribe(result=>{
        if(result.success){
          console.log(result);
        }
        else {
          console.log(result);
        }
      })
    }
  }

  resetform(){
   this.formGroup.reset();
  }

}
