import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';
import { AssetWarehouseService } from 'src/app/services/asset-warehouse-services/asset-warehouse.service';
import { AddModalComponent } from './modals/add-modal/add-modal.component';
import { DeleteModalComponent } from './modals/delete-modal/delete-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = [
    'code',
    'name',
    'address',
    'created_at',
    'created_by_user',
    'status',
    'action',
  ];
  assetWarehouseList = [];
  currentPage: number = 1;
  pageSize: number = 5;
  totalPage: number = 0;
  count: number = 0;
  dateFormat: string = 'DD/MM/YYYY';

  constructor(
    private assetWarehouseService: AssetWarehouseService,
    public addModal: MatDialog,
    public deleteModal: MatDialog
  ) {}

  formatDate(date: string) {
    return moment(date).format(this.dateFormat);
  }

  fetchAssetWarehouseList(currentPage?: number, pageSize?: number) {
    this.assetWarehouseService
      .getAllAssetWarehouse(currentPage, pageSize)
      .subscribe((res: any) => {
        if (res?.status === 'success') {
          this.assetWarehouseList = res?.responseData?.rows;
          this.totalPage = res?.responseData?.totalPages;
          this.count = res?.responseData?.count;
        }
      });
  }

  onPageChange(e: any) {
    console.log('current page', e);
    this.currentPage = e.pageIndex + 1;
    this.pageSize = e.pageSize;
    this.fetchAssetWarehouseList(this.currentPage, this.pageSize);
  }

  onOpenAddModal() {
    const dialogRef = this.addModal.open(AddModalComponent, {
      width: '780px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'add-success') {
        this.fetchAssetWarehouseList(this.currentPage, this.pageSize);
      }
    });
  }

  onOpenDeleteModal(id: string) {
    const dialogRef = this.deleteModal.open(DeleteModalComponent, {
      width: '500px',
      data: { assetWarehouseId: id },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'delete-success') {
        this.fetchAssetWarehouseList(this.currentPage, this.pageSize);
      }
    });
  }

  ngOnInit(): void {
    this.fetchAssetWarehouseList(this.currentPage, this.pageSize);
  }
}
