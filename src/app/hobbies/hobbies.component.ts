import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  music: boolean = true;
  video: boolean = true;
  trips: boolean = true;
  swim: boolean = true;
  board: boolean = true;
  movie: boolean = true;
  anime: boolean = true;
  manga: boolean = true;

  onmusic() {
    this.music = !this.music;
  }

  onvideo() {
    this.video = !this.video;
  }

  ontrips() {
    this.trips = !this.trips;
  }

  onswim() {
    this.swim = !this.swim;
  }

  onboard() {
    this.board = !this.board;
  }

  onmovie() {
    this.movie = !this.movie;
  }

  onanime() {
    this.anime = !this.anime;
  }

  onmanga() {
    this.manga = !this.manga;
  }



  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  images = ['../../assets/images/music.png',
            '../../assets/images/v-games.png',
            '../../assets/images/r-trips.png',
            '../../assets/images/swim.png',
            '../../assets/images/b-games.png',
            '../../assets/images/movie.png',
            '../../assets/images/anime.png',
            '../../assets/images/manga.png'];

}
