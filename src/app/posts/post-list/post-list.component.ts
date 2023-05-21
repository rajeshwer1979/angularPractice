import { Component, OnInit, Input } from '@angular/core';
import { PostServices } from '../post-service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit { 

  //@Input() posts: Post[]=[];
  posts: Post[]=[];
  constructor(public postServices:PostServices) { }

  ngOnInit(){
    this.posts = this.postServices.getPosts(); 
  }
  


  // posts = [
  //   {title: 'First Post', content:'This is first post content.'},
  //   {title: 'Second Post', content:'This is first post content.'},
  //   {title: 'Third Post', content:'This is first post content.'}
  // ]

 
}
