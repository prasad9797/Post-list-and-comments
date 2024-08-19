import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/posts';
import { Comment } from '../interfaces/comment';

@Injectable({
  providedIn: 'root',
})
export class PostListService {
  private readonly postApiURL = 'https://jsonplaceholder.typicode.com/posts';
  private readonly commentApiURL =
    'https://jsonplaceholder.typicode.com/comments?postId=';
  constructor(private httpClient: HttpClient) {}

  getPost(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.postApiURL);
  }

  getComment(id: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.commentApiURL + id);
  }
}
