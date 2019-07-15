import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { ProjectListService } from '../../services/project-list.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ProjectsComponent implements OnInit {

  projectList: any;
  filteredProjects: any;
  serchTerm = "";
  @ViewChild("searchProject") searchField: ElementRef;

  constructor(private _projectListData: ProjectListService) { }

  ngOnInit() {
    this.defalutData();
    this.searchField.nativeElement.focus();
  }

  defalutData() {
    this._projectListData.feachProjectData.subscribe((response: any) => {
      this.projectList = JSON.parse(response._body).projectPeriodDuration;
      this.filteredProjects = this.projectList;
      console.log(this.filteredProjects);
    })
  }

  filterData() {
    if (this.serchTerm != "") {
      console.log(this.filteredProjects);
      this.filteredProjects = this.projectList.filter(data => {
        return Object.keys(data).filter(key => data[key].toLowerCase().indexOf(this.serchTerm.toLowerCase()) !== -1).length > 0;
      });
    } else {
      this.defalutData();
    }
  }

}
