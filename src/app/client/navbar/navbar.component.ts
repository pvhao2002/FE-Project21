import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

declare let $: any; // Import jQuery
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isHomePage = true;
  isLogin: boolean = false;
  navName: string = 'Trang chủ';
  bread2: string = 'Trang chủ';
  activeNav: string = 'home';

  ngOnInit(): void {
    const url = window.location.href;
    this.isHomePage = url.includes('home');
    const user = localStorage.getItem('user');
    if (user && JSON.parse(user)?.username) {
      this.isLogin = true;
    }

    if (url.includes('about')) {
      this.navName = 'Giới thiệu';
      this.bread2 = 'Về chúng tôi';
      this.activeNav = 'about';
    } else if (url.includes('contact')) {
      this.navName = 'Liên hệ';
      this.bread2 = 'Liên hệ';
      this.activeNav = 'contact';
    } else if (url.includes('package')) {
      this.navName = 'Gói dịch vụ';
      this.bread2 = 'Gói dịch vụ';
      this.activeNav = 'package';
    } else if (url.includes('my-booking')) {
      this.navName = 'Lịch sử đặt tour';
      this.bread2 = 'Lịch sử đặt tour';
      this.activeNav = 'my-booking';
    } else if (url.includes('booking')) {
      this.navName = 'Đặt lịch';
      this.bread2 = 'Đặt lịch';
      this.activeNav = 'booking';
    }
  }

  logout() {
    localStorage.removeItem('user');
    window.location.reload();
  }
}
