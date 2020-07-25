import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import {RouterModule, Routes} from '@angular/router';
import { SinglePostComponent } from './components/single-post/single-post.component';


const routes: Routes = [
  {path: '', component: PostComponent},
  {path: ':id', component: SinglePostComponent}
];

@NgModule({
  declarations: [PostComponent, SinglePostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PostModule { }
