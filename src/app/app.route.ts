import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { DirectivesNgSwitchComponent } from './pages/directives-ng-switch/directives-ng-switch.component';
import { PipeFilterComponent } from './pages/pipe-filter/pipe-filter.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { TemplateDrivenFormComponent } from './pages/template-driven-form/template-driven-form.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent, pathMatch: 'full' },
  { path: 'about', component: AboutPageComponent, pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent, pathMatch: 'full' },
  { path: 'directivesNgSwitch', component: DirectivesNgSwitchComponent, pathMatch: 'full' },
  { path: 'PipeFilter', component: PipeFilterComponent, pathMatch: 'full' },
  { path: 'Directives', component: DirectivesComponent, pathMatch: 'full' },
  { path: 'TemplateDrivenForm', component: TemplateDrivenFormComponent, pathMatch: 'full' },
  { path: 'DataBinding', component: DataBindingComponent, pathMatch: 'full' }
];