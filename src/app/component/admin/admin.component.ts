import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  home:boolean = true;
  newProduct:boolean = false;
  order:boolean = false;
  users: boolean = false;
  article: boolean = false;
  orders: boolean = false;
  slider: boolean = false;

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0)
  }

  changeComponent(targetComponent) {
    if (targetComponent === 'newProduct') {
      this.newProduct = true;
      this.home = false;
    }  else if(targetComponent === 'home') {
      this.article = false;
      this.newProduct = false;
      this.orders=false;
      this.slider = false;
      this.home = true;
    } else if (targetComponent === 'article') {
      this.article = true;
      this.home = false;
    }else if (targetComponent === 'orders') {
    this.orders=true;
    this.home = false;
    }   else if (targetComponent === 'slider') {
      console.log('slider')
      this.slider=true;
      this.home = false;
    }
  
}

}
