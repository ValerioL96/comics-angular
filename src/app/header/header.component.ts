import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navBarList = [
    { id: 1, title: 'CHARACTERS', active: false, url: '#' },
    { id: 2, title: 'COMICS', active: true, url: '#' },
    { id: 3, title: 'MOVIES', active: false, url: '#' },
    { id: 4, title: 'TV', active: false, url: '#' },
    { id: 5, title: 'GAMES', active: false, url: '#' },
    { id: 6, title: 'COLLECTIBLES', active: false, url: '#' },
    { id: 7, title: 'VIDEOS', active: false, url: '#' },
    { id: 8, title: 'FANS', active: false, url: '#' },
    { id: 9, title: 'NEWS', active: false, url: '#' },
    { id: 10, title: 'SHOP', active: false, url: '#' }
  ];
}
