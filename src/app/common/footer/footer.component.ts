import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { configCommonWords } from '../../common-words-config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  commonName: any;
  dataFromJSON;

  constructor(private http: Http) { }

  ngOnInit() {
    this.commonName = configCommonWords;
    var obj;
    this.getJSON().subscribe(
      data => {
        this.dataFromJSON = data;
        console.log(this.dataFromJSON);
      }, 
      error => console.log(error)
    );
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/data/social-network.json")
      .map((res:any) => res.json())
  }

}
