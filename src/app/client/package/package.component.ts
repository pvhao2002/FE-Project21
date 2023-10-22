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

  ngOnInit(): void {
    this.http.get('http://localhost:8080/BE-Project21-1.0-SNAPSHOT/api/package/getAll')
      .subscribe((res: any) => {
        if (res?.status != '203') {
          this.listPackage = res.data;
        }
      });
  }

}
