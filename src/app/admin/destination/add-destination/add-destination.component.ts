import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-destination',
  templateUrl: './add-destination.component.html',
  styleUrls: ['./add-destination.component.css']
})
export class AddDestinationComponent {
  message: string = '';
  status: any;
  form: any = {
    name: '',
    image: '',
  }

  constructor(private http: HttpClient) {
  }

  add() {
    if (this.form.name && this.form.image) {
      this.http.post('http://localhost:8080/BE-Project21-1.0-SNAPSHOT/api/destination/add', this.form)
        .subscribe((res: any) => {
          if (res?.status == '200') {
            this.status = res.status;
            this.message = res.message;
            this.form.name = '';
            this.form.image = '';
          } else {
            this.status = '203';
            this.message = 'Thêm điểm đến thất bại';
          }
        });
    }
  }
}
