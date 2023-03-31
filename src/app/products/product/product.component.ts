import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from './../../products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  selectedProduct: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // let id = this.route.snapshot.paramMap.get('id');
    // if (id !== null) {
    //   this.selectedProduct = products.find(i => i.id === +id!);
    // } else {
    //   // handle the case where the id parameter is not found
    // }
    this.route.paramMap
      .subscribe(params => {
        let id = Number(params.get('id'));
        this.selectedProduct = products.find(i => i.id === id);
      })

  }

}
