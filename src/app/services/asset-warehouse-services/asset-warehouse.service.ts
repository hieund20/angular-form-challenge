import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VODINHTHIEN_BEARER_KEY } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class AssetWarehouseService {
  bearer = VODINHTHIEN_BEARER_KEY;

  constructor(private http: HttpClient) {}

  getAllAssetWarehouse(currentPage?: number, pageSize?: number) {
    let url = `https://gateway.dev.meu-solutions.com/assetmanagement/api/v1.0/asset-warehouse/getAllAssetWarehouse?currentPage=${currentPage}&pageSize=${pageSize}&sortField=created_at&sortOrder=DESC`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `bearer ${this.bearer}`,
    });
    return this.http.get(url, { headers: headers });
  }

  getAssetWarehouseById(id: string) {
    let url = `https://gateway.dev.meu-solutions.com/assetmanagement/api/v1.0/asset-warehouse/getAssetWarehouse/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `bearer ${this.bearer}`,
    });
    return this.http.get(url, { headers: headers });
  }

  postNewAssetWarehouse(model: object) {
    let url = `https://gateway.dev.meu-solutions.com/assetmanagement/api/v1.0/asset-warehouse/postAssetWarehouse`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `bearer ${this.bearer}`,
    });
    return this.http.post(url, model, { headers: headers });
  }

  putAssetWarehouse(model: object, warehouseId: string) {
    let url = `https://gateway.dev.meu-solutions.com/assetmanagement/api/v1.0/asset-warehouse/putAssetWarehouse/${warehouseId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `bearer ${this.bearer}`,
    });
    return this.http.put(url, model, { headers: headers });
  }

  deleteAssetWarehouse(id: string) {
    let url = `https://gateway.dev.meu-solutions.com/assetmanagement/api/v1.0/asset-warehouse/deleteAssetWarehouse/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `bearer ${this.bearer}`,
    });
    return this.http.delete(url, { headers: headers });
  }
}
