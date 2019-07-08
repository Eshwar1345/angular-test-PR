import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class WrapperComponent implements OnInit {

  constructor( ) { }

  public loaderWrap = false;
  // public pageLoaded = false;
  @ViewChild('parentElement') parentClick: ElementRef;

  ngOnInit() { 
    setTimeout(() => {
      this.loaderWrap = true;
      this.parentClick.nativeElement.click();
    }, 2500);
  }

}
