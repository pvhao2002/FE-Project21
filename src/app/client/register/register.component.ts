import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  toggleClass: boolean = false;
  message: string = '';

  constructor(private http: HttpClient) {
  }

  formModel = {
    username: '',
    password: '',
    fullName: '',
    email: '',
    address: '',
    roleId: 2
  }

  ngOnInit(): void {

  }

  register(): void {
    if (this.formModel.username == '' ||
      this.formModel.password == '' ||
      this.formModel.fullName == '' ||
      this.formModel.email == '' ||
      this.formModel.address == '') {
      alert('Vui lòng nhập đủ thông tin');
      return;
    }
    this.http.post('http://localhost:8080/BE-Project21-1.0-SNAPSHOT/api/user/register', this.formModel)
      .subscribe((res: any) => {
        if (res?.status == '200') {
          alert('Đăng ký thành công');
          this.formModel = {
            username: '',
            password: '',
            fullName: '',
            email: '',
            address: '',
            roleId: 2
          }
          this.toggle();
        } else {
          this.message = res.message;
        }
      }, error => {
      });
  }

  toggle(): void {
    this.toggleClass = !this.toggleClass;
  }


  login(): void {
    if (this.formModel.username == '' || this.formModel.password == '') {
      alert('Vui lòng nhập đủ thông tin');
      return;
    }
    this.http.post('http://localhost:8080/BE-Project21-1.0-SNAPSHOT/api/user/login', this.formModel)
      .subscribe((res: any) => {
        if (res.status == '200') {
          localStorage.setItem('user', JSON.stringify(res.data));
          if (res.data.roleId == 1) {
            window.location.href = '/admin';
          } else {
            window.location.href = '/';
          }
        } else {
          this.message = res.message;
        }
      });
  }
}
