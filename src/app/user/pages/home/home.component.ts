import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  Images = [
    {
      image: '../../../../assets/Images/slider_images/slider_images1.png',
    },
    {
      image: '../../../../assets/Images/slider_images/slider_images1.png', 
    },
    {
      title : 'third title',
      image: '../../../../assets/Images/slider_images/slider_images1.png'
    }
      
     
   ]
  

  SlideOptions = {
    items: 3, dots: false, nav: true, loop: true,
    margin: 16,
    autoplay: true,
  };

 
  CarouselOptions = { items: 3, dots: false, nav: true };
  constructor() { }
  CarouselOptionsTwo = { items: 1, dots: false, nav: true };
  
  ngOnInit() {
  }

}

