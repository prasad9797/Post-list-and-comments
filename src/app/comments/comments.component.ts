import { Component, Input, OnInit } from '@angular/core';
import { PostListService } from '../services/post-list.service';
import { Comment } from '../interfaces/comment';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
})
export class CommentsComponent implements OnInit {
  @Input() postId!: number;
  commentList: Comment[] = [];

  constructor(private postListService: PostListService) {}

  ngOnInit() {
    this.postListService.getComment(this.postId).subscribe((response) => {
      this.commentList = response;
    });
  }
}
