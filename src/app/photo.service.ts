import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface UnsplashIterface {
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getRandomPhoto() {
    return this.http.get<UnsplashIterface>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID XXXX'
      }
    });
  }
}
