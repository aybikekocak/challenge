import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private route: Router) {
  }

  goToSearch(){
    this.route.navigate(['home/inquiry-panel'])
  }
  goToMissionManage(){
    this.route.navigate(['home/mission-manage'])
  }
  goToCardApp(){
    this.route.navigate(['home/card'])
  }
  goToRealTimeCard(){
    this.route.navigate(['home/real-time-card'])
  }
  goToMap(){
    this.route.navigate(['home/map'])
  }

}
