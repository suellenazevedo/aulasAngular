import { PostService } from './../service/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
// classe criada 
export class PostListComponent implements OnInit {

  constructor(private PostService: PostService) { }

  //variaveis 
  posts: Array<Post> = new Array<Post>();
  id: number;

  //método para logo quando abrir a aplicação já mostrar todos os posts
  ngOnInit() {
    // this.findAll();
  }

  //método chamado no método acima criado para chamar todos os posts
  findAll(){
     this.PostService.getAll().subscribe((postOut: Post[]) =>{
        this.posts = postOut;
     })
  }

  btnAllClick(){
    this.findAll();
  }
  
  btnIdClick(){
    this.PostService.getId(this.id).subscribe((postId: Post) =>{
      this.posts[0] = postId;
   })
  }
}

