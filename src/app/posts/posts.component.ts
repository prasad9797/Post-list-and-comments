import { Component } from '@angular/core';
import { PostListService } from '../services/post-list.service';
import { Post } from '../interfaces/posts';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommentsComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  postList: Post[] = [];
  showCommentId!: number;
  constructor(private postListService: PostListService) {}

  ngOnInit() {
    this.postListService.getPost().subscribe((response) => {
      this.postList = response;
    });
  }

  displayComment(id: number) {
    if (this.showCommentId === id) this.showCommentId = 0;
    else this.showCommentId = id;
  }
}
