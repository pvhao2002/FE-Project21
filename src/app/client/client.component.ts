import {AfterViewInit, Component, OnInit, Renderer2} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit, AfterViewInit {
  constructor(private meta: Meta, private title: Title, private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.removeExistingMetaTags();
    this.addNewMetaTags();

    this.addScriptToBody('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js');
    this.addScriptToBody('../../assets/client/lib/wow/wow.min.js');
    this.addScriptToBody('../../assets/client/lib/easing/easing.min.js');
    this.addScriptToBody('../../assets/client/lib/waypoints/waypoints.min.js');
    this.addScriptToBody('../../assets/client/lib/owlcarousel/owl.carousel.min.js');

    this.addScriptToBody('../../assets/client/lib/tempusdominus/js/moment.min.js');
    this.addScriptToBody('../../assets/client/lib/tempusdominus/js/moment-timezone.min.js');
    this.addScriptToBody('../../assets/client/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js');

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
      {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true},
      {
        href: 'https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap',
        rel: 'stylesheet'
      },
      {href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css', rel: 'stylesheet'},
      {href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css', rel: 'stylesheet'},
      {href: '../../assets/client/lib/animate/animate.min.css', rel: 'stylesheet'},
      {href: '../../assets/client/lib/owlcarousel/assets/owl.carousel.min.css', rel: 'stylesheet'},
      {href: '../../assets/client/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css', rel: 'stylesheet'},
      {href: '../../assets/client/css/bootstrap.min.css', rel: 'stylesheet'},
      {href: '../../assets/client/css/style.css', rel: 'stylesheet'},
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

}
