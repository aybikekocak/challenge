import {Component} from '@angular/core';
import {Mission} from "../../../model/mission";
import {MissionManageService} from "../../../service/mission-manage/mission-manage.service";

@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.css']
})
export class AddMissionComponent {
  newMission: any = { id: 0, type: '', content: '', assignedTo: '', status: 'Süreçte' };

  constructor(private missionService: MissionManageService) { }

  addMission(): void {
    this.missionService.addMission(this.newMission);
    this.newMission = { id: 0, type: '', content: '', assignedTo: '', status: 'Süreçte' };
  }
}
