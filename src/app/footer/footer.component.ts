import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  navBarList = [
    { id: 1, title: 'CHARACTERS', active: false, url: '#' },
    { id: 2, title: 'COMICS', active: false, url: '#' },
    { id: 3, title: 'MOVIES', active: false, url: '#' },
    { id: 4, title: 'TV', active: false, url: '#' },
    { id: 5, title: 'GAMES', active: false, url: '#' },
    { id: 6, title: 'COLLECTIBLES', active: false, url: '#' },
    { id: 7, title: 'VIDEOS', active: false, url: '#' },
    { id: 8, title: 'FANS', active: false, url: '#' },
    { id: 9, title: 'NEWS', active: false, url: '#' },
    { id: 10, title: 'SHOP', active: false, url: '#' }
  ];

  shopList = [
    { id: 1, name: 'Shop DC' },
    { id: 2, name: 'Shop DC Collectibles' }
  ];

  dcList = [
    { id: 1, title: 'CHARACTERS', url: '#' },
    { id: 2, title: 'COMICS', url: '#' },
    { id: 3, title: 'MOVIES', url: '#' },
    { id: 4, title: 'TV', url: '#' },
    { id: 5, title: 'GAMES', url: '#' },
    { id: 6, title: 'COLLECTIBLES', url: '#' },
    { id: 7, title: 'VIDEOS', url: '#' },
    { id: 8, title: 'FANS', url: '#' },
    { id: 9, title: 'NEWS', url: '#' },
    { id: 10, title: 'SHOP', url: '#' }
  ];

  sitesList = [
    { id: 1, site_name: 'DC', url: '#' },
    { id: 2, site_name: 'MAD Magazine', url: '#' },
    { id: 3, site_name: 'DC Kids', url: '#' },
    { id: 4, site_name: 'DC Universe', url: '#' },
    { id: 5, site_name: 'DC Power Visa', url: '#' }
  ];

  socialsList = [
    { id: 1, image: '/img/footer-facebook.png' },
    { id: 2, image: '/img/footer-periscope.png' },
    { id: 3, image: '/img/footer-pinterest.png' },
    { id: 4, image: '/img/footer-twitter.png' },
    { id: 5, image: '/img/footer-youtube.png' }
  ];
}
