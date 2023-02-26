import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../services/order-details.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  productData:any;

  ngOnInit(): void {
    this.productData = this.service.productDetails;
  }

}
