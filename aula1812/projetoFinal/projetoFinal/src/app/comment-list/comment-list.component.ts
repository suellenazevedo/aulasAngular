import { Comments } from './../model/comments';
import { CommentsService } from './../service/comments.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})

export class CommentsListComponent implements OnInit {

  constructor(private commentService: CommentsService) { }

  comment: Comments[];


  ngOnInit() {
     this.findAll();
  }


  findAll(){
    this.commentService.getAll().subscribe((commentOut: Comments[])=>{
      this.comment = commentOut
    });
  }
}
