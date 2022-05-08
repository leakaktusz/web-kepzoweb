import { Component, OnInit } from '@angular/core';
import { GalleryObject } from '../../shared/constants/constants';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  galleryObject: Array<any> = GalleryObject;

  constructor() { }

  ngOnInit(): void {
  }

}
