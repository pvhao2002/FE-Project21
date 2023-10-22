import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {
  listDestination: any = [];
  message: string = '';
  status: any;
  form: any = {
    name: '',
    price: '',
    destinationId: '',
    days: '',
    numberOfPeople: '',
    description: '',
    image: '',
  }

  constructor(private http: HttpClient) {
  }


  add() {
    if (this.form.name && this.form.price && this.form.destinationId && this.form.days && this.form.numberOfPeople && this.form.description && this.form.image) {
      this.http.post('http://localhost:8080/BE-Project21-1.0-SNAPSHOT/api/package/add', this.form)
        .subscribe((res: any) => {
          if (res?.status == '200') {
            this.status = res.status;
            this.message = res.message;
            this.form.name = '';
            this.form.price = '';
            this.form.destinationId = '';
            this.form.days = '';
            this.form.numberOfPeople = '';
            this.form.description = '';
            this.form.image = '';
          } else {
            this.status = '203';
            this.message = 'Thêm gói thất bại';
          }
        });
    }
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/BE-Project21-1.0-SNAPSHOT/api/destination/getAll')
      .subscribe((res: any) => {
        if (res?.status != '203') {
          this.listDestination = res;
        }
      });
  }

}
