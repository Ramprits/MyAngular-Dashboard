import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MenuModule, PanelModule, ChartModule, InputTextModule, ButtonModule, InputMaskModule, InputTextareaModule, EditorModule, CalendarModule, RadioButtonModule, FieldsetModule, DropdownModule, MultiSelectModule, ListboxModule, SpinnerModule, SliderModule, RatingModule, DataTableModule, ContextMenuModule, TabViewModule, DialogModule, StepsModule, ScheduleModule, TreeModule, GMapModule, DataGridModule, TooltipModule, ConfirmationService, ConfirmDialogModule, GrowlModule, DragDropModule, GalleriaModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticComponent } from './statistic/statistic.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

import { AlltimesComponent } from './alltimes/alltimes.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
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


const appRoutes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "alltimes", component: AlltimesComponent },
  { path: "timesheet", component: TimesheetComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "employees", component: EmployeeListComponent },
  { path: "settings", component: SettingsComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'fruits', component: FruitComponent },
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
    EmployeeListComponent
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
  providers: [ConfirmationService, CustomerService, ProductService, FruitService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
