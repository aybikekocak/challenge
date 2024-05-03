import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {MissionManageComponent} from "./components/mission-manage/mission-manage.component";
import {RealTimeMapComponent} from "./components/real-time-map/real-time-map.component";
import {InquiryPanelComponent} from "./components/inquiry-panel/inquiry-panel.component";
import {CardComponent} from "./components/card/card.component";
import {RealTimeCardComponent} from "./components/real-time-card/real-time-card.component";

const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'home', component: HomeComponent,
  children:[
    {path:'mission-manage', component: MissionManageComponent},
    {path:'map', component: RealTimeMapComponent},
    {path:'inquiry-panel', component: InquiryPanelComponent},
    {path:'card', component: CardComponent},
    {path:'real-time-card', component: RealTimeCardComponent},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
