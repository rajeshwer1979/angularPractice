import {Component, OnInit, EventEmitter, Output} from '@angular/core'; 
import { NgForm } from '@angular/forms'; 
import { PostServices } from '../post-service';
//import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredTitle = "";
  enteredContent = "";
 // @Output() postCreated = new EventEmitter<Post>();

  //enteredContent = "Write something...";
  //newPost="";
  constructor(public postServices:PostServices) { } 
 
  ngOnInit(): void {
  }
  // onAddPost(){
  //   this.newPost = this.enteredContent;
  // }

  // onAddPost(){
  //   const post = {
  //     title : this.enteredTitle,
  //     content : this.enteredContent
  //   };
  //   this.postCreated.emit(post);
  // }

  onAddPost(form:NgForm){
    if(form.invalid){
      return;
    }
    // const post:Post = {
    //   title : form.value.title,
    //   content : form.value.content
    // };
   // this.postCreated.emit(post);
   this.postServices.addPosts(form.value.title,form.value.content);
   form.resetForm();
  }
}
