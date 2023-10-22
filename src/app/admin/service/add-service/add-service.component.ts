import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {
  message: string = '';
  status: any;
  form: any = {
    name: '',
    description: '',
  }

  constructor(private http: HttpClient) {
  }

  add() {
    if (this.form.name && this.form.description) {
      this.http.post('http://localhost:8080/BE-Project21-1.0-SNAPSHOT/api/service/add', this.form)
        .subscribe((res: any) => {
          console.log(res)
          if (res?.status == '200') {
            this.status = res.status;
            this.message = res.message;
            this.form.name = '';
            this.form.description = '';
          } else {
            this.status  = '203';
            this.message = 'Thêm dịch vụ thất bại';
          }
        });
    }
  }

}
