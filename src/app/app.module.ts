import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {ButtonModule} from "primeng/button";
import { MissionManageComponent } from './components/mission-manage/mission-manage.component';
import { AddMissionComponent } from './components/mission-manage/add-mission/add-mission.component';
import {TableModule} from "primeng/table";
import {FormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import { InputTextModule } from 'primeng/inputtext';
import { RealTimeMapComponent } from './components/real-time-map/real-time-map.component';
import { RealTimeCardComponent } from './components/real-time-card/real-time-card.component';
import { CardComponent } from './components/card/card.component';
import { InquiryPanelComponent } from './components/inquiry-panel/inquiry-panel.component';
import { ChartsComponent } from './components/mission-manage/charts/charts.component';
import {ChartModule} from "primeng/chart";
import { CardAComponent } from './components/card/card-a/card-a.component';
import { CardBComponent } from './components/card/card-b/card-b.component';
import { CardCComponent } from './components/card/card-c/card-c.component';
import { ListCardsComponent } from './components/real-time-card/list-cards/list-cards.component';
import { CardsComponent } from './components/real-time-card/cards/cards.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MissionManageComponent,
    AddMissionComponent,
    RealTimeMapComponent,
    RealTimeCardComponent,
    CardComponent,
    InquiryPanelComponent,
    ChartsComponent,
    CardAComponent,
    CardBComponent,
    CardCComponent,
    ListCardsComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    FormsModule,
    CardModule,
    InputTextModule,
    ChartModule
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
