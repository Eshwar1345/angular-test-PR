import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataBindingComponent implements OnInit {

  counterValue = 0;
  key: string;
  event: KeyboardEvent;
  public shouldShow = false;
  @ViewChild("myLabel") eleWidth: ElementRef;
  
  showOrHideManually() {
    if(this.eleWidth.nativeElement.hasAttribute('style')){
      this.eleWidth.nativeElement.removeAttribute('style');
    }else{
      /*this.eleWidth.nativeElement.style.width = "0%";*/
      this.eleWidth.nativeElement.setAttribute(
        "style", "width: 0; background-color: gray;"
      )
    }
  }

  constructor() { }

  ngOnInit() {
    this.onEvent;
  }

  borderRadius(){
    this.shouldShow = !this.shouldShow;
  }

  person = {
    name: "Eshwargowda"
  }
  product = {
    imageUrl: "data:image/jpeg;base64,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",
    productName: "Eshwargowda"
  }
  get counter() {
    return this.counterValue;
  }

  set counter(value) {
    this.counterValue = value;
  }

  decrement() {
    this.counter--;
  }

  increment() {
    this.counter++;
  }
  
  onKeyPress(event: KeyboardEvent): void {
    this.key = event.key;
  }

  onEvent(event: KeyboardEvent): void {
    this.event = event;
  }

}
