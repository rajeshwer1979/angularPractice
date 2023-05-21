import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../shared/product';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:any = Product;
  id:number | undefined;
  sub:any;

  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService,) { 
      
    }

  ngOnInit(): void {
    this.sub = this._Activatedroute.params.subscribe(params=>{ 
     this.id=this._Activatedroute.snapshot.params['id'];
      let products=this._productService.getProducts();
      this.product = products.find(p => p.productID == this.id); // key = key
    }); 

  }

  goBack(){
    this._router.navigate(['product']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
