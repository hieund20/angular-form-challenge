import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AssetWarehouseService {
  bearer =
    'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidm9kaW5odGhpZW5AZ21haWwuY29tIiwiZXhwIjoxNjUxMTk4ODMxLCJpc3MiOiJhbmF3b3JrLmNvbSIsImF1ZCI6ImFuYXdvcmsuY29tIn0.v8HBOAYCk9-FEA2V6oiXZMBY-kISDwZhnhElXx1c_HY';

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
