import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AssetStatusService {
  bearer =
    'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidm9kaW5odGhpZW5AZ21haWwuY29tIiwiZXhwIjoxNjUxMTk4ODMxLCJpc3MiOiJhbmF3b3JrLmNvbSIsImF1ZCI6ImFuYXdvcmsuY29tIn0.v8HBOAYCk9-FEA2V6oiXZMBY-kISDwZhnhElXx1c_HY';

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
