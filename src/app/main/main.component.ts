import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    ProductListComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  navBarComics = [
    {
      image: '/img/buy-comics-digital-comics.png',
      text: 'CHARACTERS'
    },
    {
      image: '/img/buy-comics-merchandise.png',
      text: 'COMICS'
    },
    {
      image: '/img/buy-comics-shop-locator.png',
      text: 'MOVIES'
    },
    {
      image: '/img/buy-comics-subscriptions.png',
      text: 'TV'
    },
    {
      image: '/img/buy-dc-power-visa.svg',
      text: 'GAMES'
    }
  ];
}
