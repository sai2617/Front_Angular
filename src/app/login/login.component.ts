import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SharedDataService } from '../shared-data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private http: HttpClient,
    private sharedDataService: SharedDataService,
    private authService: AuthService
  ) {}

  Login() {
    // ... your login logic ...

    
       
    let bodyData = {
      email: this.email,
      password: this.password,
    };

    // this.router.navigateByUrl('/notes-list');

    this.http.post("http://localhost:8085/api/v1/employee/login", bodyData).subscribe((resultData: any) => {
      if (resultData.message == "Login Success") {
        this.sharedDataService.setEmployeeName(resultData.employeeName); // Set the employee name in the service
        this.router.navigateByUrl('/notes-list');
      } else {
        alert("Incorrect Email and Password not match");
      }
    });

    this.authService.login();
  }
}
