import { Component, OnInit } from '@angular/core';
import { lightbox } from 'lightbox2';
import { Images } from 'src/app/images';
import { SharedService } from 'src/app/shared.service';

import { ImagesService } from '../../images.service'

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  
  modal = document.getElementById("myModal");
  img = document.getElementById("myImg");
  modalImg = document.getElementById("imgModal");
  captionText = document.getElementById("caption");
  span = document.getElementById("close");

  Images:Images[] =[];

    

  constructor(private imageService: ImagesService, 
              private sharedService: SharedService) { }

  ngOnInit(): void {  
    this.getImages();
  }

  getImages(){
    this.imageService.getImages().subscribe(Images => {
      this.Images = Images;
      return this.Images;
    });

  }



  


  

  

}
