import { CommentsService } from './../service/comments.service';
import { Component, OnInit } from '@angular/core';
import { Comments } from './../model/comments';

@Component({
  selector: 'app-comment-id',
  templateUrl: './comment-id.component.html',
  styleUrls: ['./comment-id.component.css']
})
export class CommentIdComponent implements OnInit {

  id: number

  comment: Comments = new Comments(0, 0, ' ', ' ', null)
  constructor(private CommentsService: CommentsService) { }

  ngOnInit() {
  }

  clickAll(){
    this.CommentsService.getById(this.id).subscribe((commentOut: Comments)=> {
      this.comment = commentOut;
    })
    
  }
}
