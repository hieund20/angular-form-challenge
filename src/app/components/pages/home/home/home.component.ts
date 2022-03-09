import { Component, OnInit } from '@angular/core';
import { AssetWarehouseService } from 'src/app/services/asset-warehouse.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddModalComponent } from './modals/add-modal/add-modal.component';

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
  ];

  assetWarehouseList = [];
  currentPage = 1;
  pageSize = 5;
  totalPage = 0;
  count = 0;

  constructor(
    private assetWarehouseService: AssetWarehouseService,
    public modal: MatDialog
  ) {}

  fetchAssetWarehouseList(currentPage?: number, pageSize?: number) {
    this.assetWarehouseService
      .getAllAssetWarehouse(currentPage, pageSize)
      .subscribe((res: any) => {
        if (res?.status === 'success') {
          console.log(res);
          this.assetWarehouseList = res?.responseData?.rows;
          this.totalPage = res?.responseData?.totalPages;
          this.count = res?.responseData?.count;
          console.log('data', this.assetWarehouseList);
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
    const modalRef = this.modal.open(AddModalComponent, {
      width: '780px',
    });

    modalRef.afterClosed().subscribe((result) => {
      console.log('The modal was closed');
      // this.animal = result;
    });
  }

  ngOnInit(): void {
    this.fetchAssetWarehouseList(this.currentPage, this.pageSize);
  }
}
