import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Images } from './images';
import { IMAGES } from './mock-images';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  getImages(): Observable<Images[]>{
    const Images: Images[] = IMAGES;
    return of(Images);
  }

  getImage(imgPath:string): Observable<Images> {
    const Images: Images[] = IMAGES.filter(a => a.imgPath === imgPath);
    return of(Images[0]);
  }
}
