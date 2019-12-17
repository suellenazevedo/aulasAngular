import { Comments } from './../model/comments';
import { CommentsService } from './../service/comments.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  constructor(private CommentService:CommentsService) { }

  comment: Comments[];


  ngOnInit() {
    // this.findAll();
  }


  findAll(){
    this.CommentService.getAll().subscribe((commentOut: Comments[])=>{
      this.comment = commentOut
    });
  }
}
