import { Component } from '@angular/core';
import { Router } from '@angular/router';  
import { Post } from './posts/post.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  constructor(private router: Router) {}

  storedPosts:Post[] = []; 

  onPostAdded(post:any){  
    this.storedPosts.push(post as never);
  }
}
