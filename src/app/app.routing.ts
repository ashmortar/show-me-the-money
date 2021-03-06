import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { LoginComponent } from './login/login.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
const appRoutes: Routes = [
	{
		path: '',
		component: LoginComponent
	},
	{
		path: 'user/:id/admin',
		component: ProjectListComponent
	},
	{
		path: 'user/:id/profile',
		component: UserDetailComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'user-detail',
		component: UserDetailComponent
	},
	{
		path: 'project-list',
		component: ProjectListComponent
	},
	{
		path: 'project-detail/:id',
		component: ProjectDetailComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
