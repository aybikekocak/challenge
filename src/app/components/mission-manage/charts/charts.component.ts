import { Component, OnInit } from '@angular/core';
import { MissionManageService } from "../../../service/mission-manage/mission-manage.service";
import {Mission} from "../../../model/mission";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  data: any;
  options: any;

  constructor(private missionService: MissionManageService) {
  }

  ngOnInit(): void {
    this.updateChartData();
  }

  async updateChartData(): Promise<void> {
    const missions =  this.missionService.getMissions();
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const statusCounts: { [key: string]: number } = missions.reduce((acc, mission) => {
      acc[mission.status] = (acc[mission.status] || 0) + 1;
      return acc;
    }, {});

    this.data = {
      labels: Object.keys(statusCounts),
      datasets: [
        {
          label: 'Görev Durumu',
          backgroundColor: '#42A5F5',
          data: Object.values(statusCounts)
        }
      ]
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };
  }
}
