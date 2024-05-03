import {Component, OnInit} from '@angular/core';
import {MissionManageService} from "../../service/mission-manage/mission-manage.service";

@Component({
  selector: 'app-mission-manage',
  templateUrl: './mission-manage.component.html',
  styleUrls: ['./mission-manage.component.css']
})
export class MissionManageComponent implements OnInit {
  missions: any;

  constructor(private missionManageService: MissionManageService) { }

  ngOnInit(): void {
    this.missions = this.missionManageService.getMissions();
  }

  markCompleted(missionId: number): void {
    this.missionManageService.markMissionCompleted(missionId);
  }
}
