import { CommentsListComponent } from './comment-list/comment-list.component';


import { CommentIdComponent } from './comment-id/comment-id.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';



const routes: Routes = [
  { path: '',  redirectTo: 'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'comments', component: CommentIdComponent },
  { path: 'allComments', component: CommentsListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
