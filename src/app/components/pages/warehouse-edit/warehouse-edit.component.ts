import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssetStatusService } from 'src/app/services/asset-status/asset-status.service';
import { AssetWarehouseService } from 'src/app/services/asset-warehouse-services/asset-warehouse.service';

@Component({
  selector: 'app-warehouse-edit',
  templateUrl: './warehouse-edit.component.html',
  styleUrls: ['./warehouse-edit.component.scss'],
})
export class WarehouseEditComponent implements OnInit {
  warehouseIdParam: string = '';
  assetStatusList = [];
  assetWarehouseModel = {
    code: '',
    name: '',
    address: '',
    description: '',
    status: {
      code: '',
      id: '',
      name: '',
    },
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private assetStatusService: AssetStatusService,
    private assetWarehouseService: AssetWarehouseService
  ) {}

  fetchAssetStatus(statusCode: string) {
    this.assetStatusService
      .getAllAssetStatus(statusCode)
      .subscribe((res: any) => {
        if (res?.status === 'success') {
          console.log('res', res);
          this.assetStatusList = res?.responseData;
        }
      });
  }

  fetchAssetWarehouseById(id: string) {
    this.assetWarehouseService
      .getAssetWarehouseById(id)
      .subscribe((res: any) => {
        if (res?.status === 'success') {
          console.log('res', res);
          this.assetWarehouseModel = res?.responseData;
          console.log('data', this.assetWarehouseModel);
        }
      });
  }

  onSaveChange() {
    // console.log('Model change', this.assetWarehouseModel);
    const modelPayload = {
      code: this.assetWarehouseModel.code,
      name: this.assetWarehouseModel.name,
      address: this.assetWarehouseModel.address,
      description: this.assetWarehouseModel?.description,
      status_id: this.assetWarehouseModel.status.id,
      asset_warehouse_mamagers: ['5eda75db-e9f2-49ca-aed8-4b6d903d4c48'],
    };
    this.assetWarehouseService
      .putAssetWarehouse(modelPayload, this.warehouseIdParam)
      .subscribe((res: any) => {
        if (res?.status === 'success') {
          alert('Chỉnh sửa kho thành công !');
        } else {
          alert('Chỉnh sửa kho không thành công !');
        }
      });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const warehouseId = params.get('warehouseId');
      this.warehouseIdParam = warehouseId || '';
      this.fetchAssetWarehouseById(warehouseId || '');
    });

    this.fetchAssetStatus('WAREHOUSE');
  }
}
