import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.route';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { WrapperComponent } from './common/wrapper/wrapper.component';
import { LoaderComponent } from './common/loader/loader.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectListService } from './services/project-list.service';
import { ParentComponent } from './pages/parent/parent.component';
import { ChildComponent } from './pages/child/child.component';
import { DirectivesNgSwitchComponent } from './pages/directives-ng-switch/directives-ng-switch.component';
import { ConvertorPipe } from './convertor.pipe';
import { PipeFilterComponent } from './pages/pipe-filter/pipe-filter.component';
import { FilterPipe } from './filter.pipe';
import { DirectivesComponent } from './pages/directives/directives.component';
import { HostDirectivesDirective } from './services/host-directives.directive';
import { TemplateDrivenFormComponent } from './pages/template-driven-form/template-driven-form.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WrapperComponent,
    LoaderComponent,
    SidebarComponent,
    HomePageComponent,
    AboutPageComponent,
    ProjectsComponent,
    ParentComponent,
    ChildComponent,
    DirectivesNgSwitchComponent,
    ConvertorPipe,
    PipeFilterComponent,
    FilterPipe,
    DirectivesComponent,
    HostDirectivesDirective,
    TemplateDrivenFormComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  bootstrap: [AppComponent],
  providers: [
    ProjectListService
  ]
})
export class AppModule { }
