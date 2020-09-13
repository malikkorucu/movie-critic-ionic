import { ActivatedRoute } from '@angular/router';
import { AddCommentComponent } from './../add-comment/add-comment.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {

  page = 1

  constructor(
    public modalController: ModalController,
    public movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddCommentComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  loadData(event) {
    this.page++
    let movieId = this.route.snapshot.params.movieId

    this.movieService.getComments(movieId, this.page)
    setTimeout(() => {
      event.target.complete();
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length == 1000) {
      //   event.target.disabled = true;
      // }
    }, 1000);
  }

}
