import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent implements OnInit {
  listMyBooking: any = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user && JSON.parse(user)?.username) {
      const _user = JSON.parse(user);
      this.http.get('http://localhost:8080/BE-Project21-1.0-SNAPSHOT/api/booking/getByUser/' + _user?.id)
        .subscribe((res: any) => {
          if (res?.status != '203') {
            this.listMyBooking = res;
          }
        });
    }
  }

  cancel(id: any) {
    this.http.patch('http://localhost:8080/BE-Project21-1.0-SNAPSHOT/api/booking/update/', {id: id, status: 'cancel'})
      .subscribe((res: any) => {
        if (res?.status != '203') {
          alert('Hủy tour thành công');
          window.location.reload();
        }
      });
  }

}
