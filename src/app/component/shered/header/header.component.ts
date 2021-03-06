import { Component, OnInit } from '@angular/core';
import { AuthServices } from '../../../core/service/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { Location } from '@angular/common';
import {delivaryTo} from './../../../config/delivary.config'

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isOrder = false;
  mobile:Boolean = false;
  elementClass = 'hidden'
  delivary = delivaryTo;
  constructor(public authService: AuthServices,
             private router: Router, 
             private msg: FlashMessagesService,
             private location: Location) {             }

  ngOnInit() {
    if(sessionStorage.getItem('order')) {
      this.isOrder = true;
    }
  }

  onClick() {
    this.isOrder=false;
  }

  logout() {
    window.localStorage.clear();
    this.router.navigate(['']);
    this.msg.show('Успешно се отписахте от системата', { cssClass: 'alert-success', timeout: 3000 } )
  }

  showHideMobileMenu() {
    this.mobile = !this.mobile
    if (this.mobile === false) {
      this.elementClass = 'hidden'
    } else {
      this.elementClass = 'col-sm-6 center-header clearfix left'
    }
  }

  onResize(event) {
    this.elementClass = 'hidden'
  }
}
