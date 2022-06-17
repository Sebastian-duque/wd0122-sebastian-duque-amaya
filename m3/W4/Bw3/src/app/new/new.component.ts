import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostReg } from '../interfaces/post';
import { PostsService } from '../services/posts.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  post: PostReg = {
    utente: '',
    caption: '',
    liked: [],
    date: '',
  };

  constructor(
    private postsSrv: PostsService,
    private userSrv: UsersService,
    private router: Router
  ) {
    this.post.utente = this.userSrv.getUser().username;
  }

  ngOnInit(): void {}

  newPost() {
    this.post.date =
      new Date().toLocaleDateString('en-EN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }) +
      ', ' +
      new Date().toLocaleTimeString('it-IT', {
        hour: '2-digit',
        minute: '2-digit',
      });
      this.router.navigate(['/']);
    this.postsSrv.newPost(this.post).subscribe();
  }
}
