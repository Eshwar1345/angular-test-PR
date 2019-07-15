import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProjectListService } from '../../services/project-list.service';
@Component({
  selector: 'app-pipe-filter',
  templateUrl: './pipe-filter.component.html',
  styleUrls: ['./pipe-filter.component.scss']
})
export class PipeFilterComponent implements OnInit {
  /*name = 'Angular 6';
  email="";
  aa:boolean=false;
  
  users=[{
    id:'123',
    email:'abc@gmail.com'
  },{
    id:'1234',
    email:'xyz@hotmail.com'
  },{
    id:'12345',
    email:'jsgsbh@kk.com'
  },{
    id:'123456',
    email:'test@gmail.com'
  }]
  
  setIndex(ii){
    this.aa=ii;
    console.log(ii);
  }
  
  characters = [
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2'
  ]
  
  constructor() { }
  
  ngOnInit() {
  }*/
  
  customData: any;
  public searchText : string;
  
  constructor(private _projectListData: ProjectListService) { }
  @ViewChild("searchField") nameField: ElementRef;
  
  ngOnInit() {
    this.defalutData();
    this.nameField.nativeElement.focus();
  }

  defalutData() {
    this._projectListData.feachProjectData.subscribe((response: any) => {
      this.customData = JSON.parse(response._body).projectPeriodDuration;
    })
  }

  /*filterData() {
    if (this.serchTerm != "") {
      console.log(this.filteredProjects);
      this.filteredProjects = this.projectList.filter(data => {
        return Object.keys(data).filter(key => data[key].toLowerCase().indexOf(this.serchTerm.toLowerCase()) !== -1).length > 0;
      });
    } else {
      this.defalutData();
    }
  }

  public searchText : string;
  public customerData : any;

  constructor() { }

  ngOnInit() {
    this.customerData = [
      {"name": 'Anil kumar', "Age": 34, "blog" :'https://code-view.com'},
      {"name": 'Sunil Kumar Singh', "Age": 28, "blog" :'https://code-sample.xyz'},
      {"name": 'Sushil Singh', "Age": 24, "blog" :'https://code-sample.com'},
      {"name": 'Aradhya Singh', "Age": 5, "blog" :'https://code-sample.com'},
      {"name": 'Reena Singh', "Age": 28, "blog" :'https://code-sample.com'},
      {"name": 'Alok Singh', "Age": 35, "blog" :'https://code-sample.com'},
      {"name": 'Dilip Singh', "Age": 34, "blog" :'https://code-sample.com'}];
  }*/

}
