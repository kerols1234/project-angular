import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../ViewModels/i-product';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, private userAuthService: UserAuthService) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${environment.API_URL}/product/getAllProducts`);
  }

  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${environment.API_URL}/product/getProductById/${id}`);
  }

  addProduct(product: IProduct) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.userAuthService.getToken(),
      }),
    };
    return this.http.post(
      `${environment.API_URL}/product/Add`,
      product,
      httpOptions
    );
  }

  editProduct(product: IProduct) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.userAuthService.getToken(),
      }),
    };
    return this.http.post(
      `${environment.API_URL}/product/Edit`,
      product,
      httpOptions
    );
  }

  deleteProduct(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.userAuthService.getToken(),
      }),
    };
    return this.http.delete(
      `${environment.API_URL}/product/Delete/${id}`,
      httpOptions
    );
  }
}
