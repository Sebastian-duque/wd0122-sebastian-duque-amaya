import {
  Component,
  ElementRef,
  HostListener,
  Injectable,
  Input,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { AuthService } from 'src/app/services/auth.service';
import { PostsService } from 'src/app/services/posts.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  @Input() post!: Post;
  edit: boolean = false;
  caption!: string;
  liked: boolean = false;
  likedArray: number[] = [];
  @Output() deleteEmitter = new EventEmitter<number>()
  showDots: boolean = false

  constructor(
    private postsSrv: PostsService,
    private authSrv: AuthService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.caption = this.post.caption;
    this.getLikedPosts();
    this.isOwner()
  }

  modificaPost(id: number, caption: string) {
    this.edit = !this.edit;
    this.postsSrv
      .modificaPost(id, { caption: caption })
      .subscribe((res: any) => {
        console.log(res);
        this.post = res;
      });
  }

  like() {
    let id: number = JSON.parse(localStorage.getItem('user')!).id;
    this.liked = !this.liked;

    if (!this.likedArray.includes(id)) {
      this.likedArray.push(id);
      this.postsSrv
        .modificaPost(this.post.id, { liked: this.likedArray })
        .subscribe((res) => {});
    } else {
      this.likedArray = this.likedArray.filter((i) => i !== id);
      this.postsSrv
        .modificaPost(this.post.id, { liked: this.likedArray })
        .subscribe((res) => {});
    }
  }

  isUserLogged() {
    return this.authSrv.isUserLogged();
  }

  getLikedPosts(): void {
    if (localStorage.getItem('user')) {
      const id = JSON.parse(localStorage.getItem('user')!).id;
      this.liked = this.post.liked.includes(id);
      this.postsSrv.getPost(this.post.id).subscribe((res: any) => {
          this.likedArray = res.liked;
      });
    }
  }

  deletePost() {
    this.deleteEmitter.emit(this.post.id)
  }

  isOwner(){
    if(localStorage.getItem('user')){
      let username = JSON.parse(localStorage.getItem('user')!).username
      if(this.post.utente === username){
        this.showDots = !this.showDots
      }
    }
  }

  // @HostListener('document:click', ['$event.target'])
  // public onPageClick(targetElement: any) {
  //   const clickedInside = this.elementRef.nativeElement.contains(targetElement);
  //   if (!clickedInside) {
  //     this.edit = !this.edit
  //   }
  // }
}
