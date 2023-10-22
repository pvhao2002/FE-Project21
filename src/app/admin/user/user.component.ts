import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  listUser: any = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/BE-Project21-1.0-SNAPSHOT/api/user/getAll')
      .subscribe((res: any) => {
        if (res?.status != '203') {
          this.listUser = res;
        }
      });
  }

  delete(id: any) {
    if (!confirm('Bạn có chắc chắn muốn xóa?')) return;
    this.http.delete('http://localhost:8080/BE-Project21-1.0-SNAPSHOT/api/user/delete/' + id)
      .subscribe((res: any) => {
        window.location.reload();
      });
  }

  restore(id: any) {
    if (!confirm('Bạn có chắc chắn muốn kích hoạt lại tài khoản?')) return;
    this.http.patch('http://localhost:8080/BE-Project21-1.0-SNAPSHOT/api/user/update/' + id, {})
      .subscribe((res: any) => {
        window.location.reload();
      });
  }

}
