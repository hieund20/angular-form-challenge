import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AssetWarehouseService } from 'src/app/services/asset-warehouse-services/asset-warehouse.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent implements OnInit {
  constructor(
    private assetWarehouseService: AssetWarehouseService,
    public modal: MatDialogRef<DeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { assetWarehouseId: '' }
  ) {}

  onCloseModal(onDelete: string) {
    this.modal.close(onDelete);
  }

  onDeleteAssetWarehouse(id: string) {
    this.assetWarehouseService
      .deleteAssetWarehouse(id)
      .subscribe((res: any) => {
        if (res?.status === 'success') {
          alert('Xóa kho hàng thành công !');
          this.onCloseModal('delete-success');
        } else {
          alert(
            'Kho hàng đang chứa tài sản, không thể xóa. Vui lòng xóa kho hàng khác !'
          );
        }
      });
  }

  ngOnInit(): void {}
}
