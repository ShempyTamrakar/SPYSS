import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-slider',
  templateUrl: './top-slider.component.html',
  styleUrls: ['./top-slider.component.css']
})
export class TopSliderComponent implements OnInit {


  constructor() { }
  SlideOptions = {
    items: 1,
    dots: false,
    nav: true,
    loop: true,
    margin: 16,
    autoplay: true,
    video: true,
    autoplayTimeout: 5000
  };
  CarouselOptions = { items: 1, dots: false, nav: true };
  ngOnInit() {
  }

}
