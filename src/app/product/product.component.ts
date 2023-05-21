import { Component, OnInit } from '@angular/core';

import { ProductService } from '../shared/services/product.service';
import { Product } from '../shared/product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  constructor(private router: Router,private productService:ProductService) { }

  ngOnInit(): void {
    this.products=this.productService.getProducts();
  }

  detailPage(obj:any){
    this.router.navigate(["/detail/"+obj.productID]);
    return false;  
  }

}
