import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Post } from '../interfaces/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts!: Post[];
  post!: Post;
  isLoading: boolean = false

  constructor(private postsSrv: PostsService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.isLoading = true
    this.postsSrv.getPosts().subscribe((res) => {
      this.posts = res.reverse();
      this.isLoading = false
    });
  }

  deletePost(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.postsSrv.deletePost(id).subscribe(() => {
          this.getPosts()
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )}
        );
      }
    })
  }
  
  // getPost(id: number) {
  //   this.postsSrv.getPost(id).subscribe((res: any) => {
  //     this.post = res;
  //   });
  // }

}
