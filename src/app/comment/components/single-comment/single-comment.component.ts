import { Component, OnInit } from '@angular/core';
import {CommentService} from '../../comment.service';
import {ActivatedRoute} from '@angular/router';
import {Comment} from '../../models/comment';

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.css']
})
export class SingleCommentComponent implements OnInit {

  comment: Comment;

  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(value =>
      commentService.getComment(value.id).subscribe(data => this.comment = data)
    );
  }

  ngOnInit(): void {
  }

}
