import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../post.service';
import {Post} from '../../models/post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  post: Post;
  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    activatedRoute.params.subscribe(value =>
      postService.getPost(value.id).subscribe(data => this.post = data)
    );
  }

  ngOnInit(): void {
  }

}
