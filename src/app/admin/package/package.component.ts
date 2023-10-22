import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  listPackage: any = [];

  constructor(private http: HttpClient) {
  }

  delete(id: any) {
    if (!confirm('Bạn có chắc chắn muốn xóa?')) return;
    this.http.delete('http://localhost:8080/BE-Project21-1.0-SNAPSHOT/api/package/delete/' + id)
      .subscribe((res: any) => {
        window.location.reload();
      });

  }

  restore(id: any) {
    this.http.patch('http://localhost:8080/BE-Project21-1.0-SNAPSHOT/api/package/update', {id})
      .subscribe((res: any) => {
        window.location.reload();
      });
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/BE-Project21-1.0-SNAPSHOT/api/package/getAll')
      .subscribe((res: any) => {
        if (res?.status != '203') {
          this.listPackage = res.data;
        }
      });
  }
}
