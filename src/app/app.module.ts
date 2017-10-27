import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MenuModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ChartModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { InputMaskModule } from 'primeng/primeng';
import { InputTextareaModule } from 'primeng/primeng';
import { EditorModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { FieldsetModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { MultiSelectModule } from 'primeng/primeng';
import { ListboxModule } from 'primeng/primeng';
import { SpinnerModule } from 'primeng/primeng';
import { SliderModule } from 'primeng/primeng';
import { RatingModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { StepsModule } from 'primeng/primeng';
import { ScheduleModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';
import { GMapModule } from 'primeng/primeng';
import { DataGridModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/primeng';
import { ConfirmationService } from 'primeng/primeng';
import { ConfirmDialogModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { DragDropModule } from 'primeng/primeng';
import { GalleriaModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticComponent } from './statistic/statistic.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

import { AlltimesComponent } from './alltimes/alltimes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FielderrorsComponent } from './fielderrors/fielderrors.component';
import { CustomerService } from './services/customer.service';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { FruitComponent } from './components/fruits/fruit/fruit.component';
import { FruitService } from './services/fruit.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { EmployeeService } from './services/employee.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './components/auth/auth.service';
import { AuthGuard } from './components/auth/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'alltimes', component: AlltimesComponent, canActivate: [AuthGuard] },
  { path: 'timesheet', component: TimesheetComponent, canActivate: [AuthGuard] },
  { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard] },
  { path: 'employees', component: EmployeeListComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'fruits', component: FruitComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StatisticComponent,
    TimesheetComponent,
    ProjectsComponent,
    AlltimesComponent,
    ProfileComponent,
    SettingsComponent,
    FielderrorsComponent,
    ProductListComponent,
    FruitComponent,
    EmployeeListComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MenuModule,
    PanelModule,
    ChartModule,
    AngularFireAuthModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    InputTextareaModule,
    EditorModule,
    CalendarModule,
    RadioButtonModule,
    FieldsetModule,
    DropdownModule,
    MultiSelectModule,
    ListboxModule,
    SpinnerModule,
    SliderModule,
    RatingModule,
    DataTableModule,
    ContextMenuModule,
    TabViewModule,
    DialogModule,
    StepsModule,
    ScheduleModule,
    TreeModule,
    GMapModule,
    DataGridModule,
    TooltipModule,
    ConfirmDialogModule,
    GrowlModule,
    DragDropModule,
    GalleriaModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [ConfirmationService, AuthGuard, AuthService, CustomerService, ProductService, FruitService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
