import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {
  randomPhotoImg: string = '';

  constructor(private photoService: PhotoService) { 
    this.fetchPhoto();
  }

  ngOnInit(): void {
    
  }

  getRandomPhoto() {
    this.fetchPhoto();
  }

  fetchPhoto(){
    this.photoService.getRandomPhoto().subscribe(result => {
      this.randomPhotoImg = result.urls.regular;
    })
  }

}
