import { ModalController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
})
export class AddCommentComponent implements OnInit {

  @ViewChild('toggle') toggle;
  commentText: string = ""
  isSpoiler: boolean = false

  constructor(
    public modalCtrl: ModalController,
    public movieService:MovieService
  ) { }

  ngOnInit() {
    
  }

  getInnerText(e) { 
    this.commentText = e.target.value
  }
  toggleButton() { 
    this.isSpoiler = !this.isSpoiler
  }
  isSpoilerState() { 
    return this.isSpoiler
  }
  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed':true
    })
  }
}
