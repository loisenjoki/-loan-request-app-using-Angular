import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../_services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-basic-reg',
  templateUrl: './basic-reg.component.html',
  styleUrls: ['./basic-reg.component.scss']
})
export class BasicRegComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  returnurllogin: string;


  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router

) { }

  ngOnInit() {
    this.returnurllogin = this.route.snapshot.queryParams['returnurllogin'] || '/auth/login';
  }

  onSubmit(): void {
    this.authService.registerr(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigateByUrl(this.returnurllogin);

      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
