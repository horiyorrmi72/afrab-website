import { Component, OnInit } from '@angular/core';
import { ScrollUpService } from '../services/scroll-up.service';


@Component({
  selector: 'app-scrollup',
  templateUrl: './scrollup.component.html',
  styleUrls: ['./scrollup.component.css']
})
export class ScrollupComponent implements OnInit {

  constructor(private scrollUpService: ScrollUpService) { }

  ngOnInit() {
    this.scrollUpService.initScrollUpButton();
  }

}
