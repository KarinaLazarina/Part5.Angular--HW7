import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './components/comment/comment.component';
import {RouterModule, Routes} from '@angular/router';
import { SingleCommentComponent } from './components/single-comment/single-comment.component';


const routes: Routes = [
  {path: '', component: CommentComponent},
  {path: ':id', component: SingleCommentComponent}
];

@NgModule({
  declarations: [CommentComponent, SingleCommentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CommentModule { }
