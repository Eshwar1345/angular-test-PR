import { Component, OnInit, ViewEncapsulation, NgZone } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { WrapperComponent } from './common/wrapper/wrapper.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'app';
  toggleClass: boolean = false;

  constructor(private route:ActivatedRoute,private router:Router, private zone: NgZone){}

  ngOnInit() {
    console.log('Page loaded');
  }

  windowResize() {
    var w = window.outerWidth;
    console.log(w);
  }

  sidebarStatus($event) {
    this.toggleClass = $event;
  }

  wrpperClick() {
    this.toggleClass = false;
  }
}
