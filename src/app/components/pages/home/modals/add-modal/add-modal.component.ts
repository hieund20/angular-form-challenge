import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AssetWarehouseService } from 'src/app/services/asset-warehouse-services/asset-warehouse.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss'],
})
export class AddModalComponent implements OnInit {
  model = {
    code: '',
    name: '',
    address: '',
    asset_warehouse_mamagers: ['28fcfd7a-ce37-4b88-827f-08468c3b805e'],
  };

  constructor(
    public modal: MatDialogRef<AddModalComponent>,
    private assetWarehouseService: AssetWarehouseService,
  ) {}

  onCloseModal(onSave: string) {
    this.modal.close(onSave);
  }

  onSaveModal() {
    this.assetWarehouseService
      .postNewAssetWarehouse(this.model)
      .subscribe((res: any) => {
        if (res?.status === 'success') {
          alert('Thêm mới kho thành công !');
          this.onCloseModal('add-success');
        } else {
          alert('Thêm mới kho không thành công !');
        }
      });
  }

  ngOnInit(): void {}
}
