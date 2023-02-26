import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from '../services/order-details.service';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {

  constructor(private param: ActivatedRoute, private service: OrderDetailsService) { }
  getPrdId: any;
  prodData: any;

  ngOnInit(): void {
    this.getPrdId = this.param.snapshot.paramMap.get('id');
    if(this.getPrdId){
      this.prodData = this.service.productDetails.filter((item: any) => {
        return item.id == this.getPrdId;
      });
    }
  }

}
