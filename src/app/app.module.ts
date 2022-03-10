import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InforFormComponent } from './components/infor-form/infor-form.component';
import { TopBarComponent } from './shared/layout/top-bar/top-bar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AddModalComponent } from './components/pages/home/modals/add-modal/add-modal.component';
import { DeleteModalComponent } from './components/pages/home/modals/delete-modal/delete-modal.component';
import { WarehouseEditComponent } from './components/pages/warehouse-edit/warehouse-edit.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit/:warehouseId', component: WarehouseEditComponent },
  { path: 'info-form', component: InforFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    InforFormComponent,
    TopBarComponent,
    HomeComponent,
    AddModalComponent,
    DeleteModalComponent,
    WarehouseEditComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [HomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
