import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  listPackage: any = [];
  formModel: any = {
    userId: '',
    packageId: '',
    tourDate: '',
    email: '',
    fullName: '',
    request: '',
    status: 'pending'
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user && JSON.parse(user)?.username) {
      const _user = JSON.parse(user);
      this.formModel.userId = _user?.id;
      this.formModel.fullName = _user?.fullName;
      this.formModel.email = _user?.email;
    }
    this.http.get('http://localhost:8080/BE-Project21-1.0-SNAPSHOT/api/package/getAll')
      .subscribe((res: any) => {
        if (res?.status != '203') {
          this.listPackage = res.data;
        }
      });
  }

  booking(): void {
    const user = localStorage.getItem('user');
    if (!user || !JSON.parse(user)?.username) {
      alert('Bạn cần đăng nhập để đặt tour');
      return;
    }
    console.log(this.formModel)
    if (this.formModel.packageId == '' || this.formModel.tourDate == '' || this.formModel.email == '' || this.formModel.fullName == '') {
      alert('Bạn cần nhập đầy đủ thông tin');
      return;
    }

    this.http.post('http://localhost:8080/BE-Project21-1.0-SNAPSHOT/api/booking/add', this.formModel)
      .subscribe((res: any) => {
        if (res?.status != '203') {
          alert('Đặt tour thành công');
          window.location.reload();
        }
      });
  }
}
