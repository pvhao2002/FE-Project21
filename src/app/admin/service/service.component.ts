import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  listService: any = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/BE-Project21-1.0-SNAPSHOT/api/service/getAll')
      .subscribe((res: any) => {
        if (res?.status != '203') {
          this.listService = res;
        }
      });
  }

  delete(id: any) {
    if (!confirm('Bạn có chắc chắn muốn xóa?')) return;
    this.http.delete('http://localhost:8080/BE-Project21-1.0-SNAPSHOT/api/service/delete/' + id)
      .subscribe((res: any) => {
        window.location.reload();
      });

  }


}
