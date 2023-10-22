import {AfterViewInit, Component, OnInit, Renderer2} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

declare var Scrollbar: any; // Định nghĩa biến demo
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, AfterViewInit {
  constructor(private meta: Meta, private title: Title, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    const body = document.body;

    // Add the classes
    this.renderer.addClass(body, 'g-sidenav-show');
    this.renderer.addClass(body, 'bg-gray-100');

    this.removeExistingMetaTags();
    this.addNewMetaTags();

    this.addScriptToBody('./../assets/admin/plugins/bower_components/jquery/dist/jquery.min.js');
    this.addScriptToBody('../../assets/admin/bootstrap/dist/js/bootstrap.bundle.min.js');
    this.addScriptToBody('../../assets/admin/js/app-style-switcher.js');
    this.addScriptToBody('../../assets/admin/js/waves.js');
    this.addScriptToBody('../../assets/admin/js/sidebarmenu.js');
    this.addScriptToBody('../../assets/admin/js/custom.js');
  }

  private removeExistingMetaTags() {
    const head = document.getElementsByTagName('head')[0];
    const links = head.querySelectorAll('link');
    const scripts = head.querySelectorAll('script');
    links.forEach(link => {
      head.removeChild(link);
    });
    scripts.forEach(script => {
      head.removeChild(script);
    });
  }

  private addNewMetaTags() {
    const head = document.getElementsByTagName('head')[0];

    // Thêm các thẻ link và script mới vào head
    const metaTags: any = [
      {rel: 'canonical', href: 'https://www.wrappixel.com/templates/ample-admin-lite/'},
      {
        href: '../../assets/admin/plugins/bower_components/chartist/dist/chartist.min.css',
        rel: 'stylesheet'
      },
      {
        href: '../../assets/admin/plugins/bower_components/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.css',
        rel: 'stylesheet'
      },
      {href: '../../assets/admin/css/style.min.css', rel: 'stylesheet'},
    ];

    metaTags.forEach((tag: any) => {
      const newTag = document.createElement('link');
      Object.keys(tag).forEach(key => {
        newTag.setAttribute(key, tag[key]);
      });
      head.appendChild(newTag);
    });
  }

  private addScriptToBody(src: string): void {
    const script = this.renderer.createElement('script');
    script.src = src;
    this.renderer.appendChild(document.body, script);
  }

  ngAfterViewInit(): void {
    var win = navigator.platform.indexOf('Win') > -1;
    if (win && document.querySelector('#sidenav-scrollbar')) {
      var options = {
        damping: '0.5'
      }
      Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
    }
  }
}
