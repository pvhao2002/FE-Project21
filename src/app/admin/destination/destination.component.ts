import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  listDestination: any = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/BE-Project21-1.0-SNAPSHOT/api/destination/getAll')
      .subscribe((res: any) => {
        if (res?.status != '203') {
          this.listDestination = res;
        }
      });
  }

  delete(id: any) {
    if (!confirm('Bạn có chắc chắn muốn xóa?')) return;
    this.http.delete('http://localhost:8080/BE-Project21-1.0-SNAPSHOT/api/destination/delete/' + id)
      .subscribe((res: any) => {
        window.location.reload();
      });
  }

}
