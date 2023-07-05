import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../../../../api-interfaces/src/lib/api-interfaces';
const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  model = 'items';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Item[]>(this.getUrl());
  }

  getItem(id: string) {
    return this.http.get<Item>(this.getUrlWithId(id));
  }

  create(item: Item) {
    return this.http.post(this.getUrl(), item);
  }

  update(item: Item) {
    return this.http.put(this.getUrlWithId(item.id), item);
  }

  delete(item: Item) {
    return this.http.delete(this.getUrlWithId(item.id));
  }

  private getUrl() {
    return `${API}${this.model}`;
  }

  private getUrlWithId(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}
