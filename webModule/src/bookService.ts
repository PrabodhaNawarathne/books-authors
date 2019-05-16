import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(
    private _http: HttpClient
  ) {}
  private headers = new Headers({'Content-Type': 'application/json'});
  title = 'Books & Authors App';

  saveBooks(obj: Object) {
    // return this._http.post('UrlLink.saveBook', obj);
    console.log(obj);
    return this._http.post('http://127.0.0.1:8000/Books', obj).subscribe((res: Response) => obj = res.json());
  }
}
