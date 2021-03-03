import { Component } from '@angular/core';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  sliderConfig={
    slidesPerView:2.5,
    spaceBetween:5,
    // loop:true,
    pagination:false
  }

  constructor() {}


}
