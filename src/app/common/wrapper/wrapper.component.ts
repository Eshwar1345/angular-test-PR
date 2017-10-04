import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})

export class WrapperComponent implements OnInit {
  constructor(
    private router: Router
  ) {}
  ngOnInit() {
    this.router.navigate(['loader']);
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 2500);
  }
}