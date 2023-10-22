import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  listBooking: any = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/BE-Project21-1.0-SNAPSHOT/api/booking/getAll')
      .subscribe((res: any) => {
        if (res?.status != '203') {
          this.listBooking = res;
        }
      });
  }

  reject(id: any) {
    this.http.patch('http://localhost:8080/BE-Project21-1.0-SNAPSHOT/api/booking/update/', {id: id, status: 'rejected'})
      .subscribe((res: any) => {
        if (res?.status != '203') {
          alert('Hủy tour thành công');
          window.location.reload();
        }
      });
  }

  accept(id: any) {
    this.http.patch('http://localhost:8080/BE-Project21-1.0-SNAPSHOT/api/booking/update/', {id: id, status: 'accepted'})
      .subscribe((res: any) => {
        if (res?.status != '203') {
          alert('Duyệt tour thành công');
          window.location.reload();
        }
      });
  }

}
