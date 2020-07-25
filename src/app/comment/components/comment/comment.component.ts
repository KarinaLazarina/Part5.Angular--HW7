import { Component, OnInit } from '@angular/core';
import {Comment} from '../../models/comment';
import {CommentService} from '../../comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: Comment[];
  constructor(private commentService: CommentService) {
    commentService.getAllComments().subscribe(value => this.comments = value);
  }

  ngOnInit(): void {
  }

}
