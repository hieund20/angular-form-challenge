import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VODINHTHIEN_BEARER_KEY } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class AssetStatusService {
  bearer = VODINHTHIEN_BEARER_KEY;

  constructor(private http: HttpClient) {}

  getAllAssetStatus(statusCode: string) {
    let url = `https://gateway.dev.meu-solutions.com/assetmanagement/api/v1.0/asset-status/getAllAssetStatus/${statusCode}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `bearer ${this.bearer}`,
    });
    return this.http.get(url, { headers: headers });
  }
}
