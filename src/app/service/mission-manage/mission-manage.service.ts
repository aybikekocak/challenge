import { Injectable } from '@angular/core';
import {Mission} from "../../model/mission";

@Injectable({
  providedIn: 'root'
})
export class MissionManageService {
  private missions: any[] = [];
  private nextMissionId: number = 0;

  constructor() { }

  getMissions(): any[] {
    return this.missions;
  }

  addMission(mission: any): void {
    mission.id = this.nextMissionId++;
    mission.status = 'Süreçte';
    this.missions.push(mission);
  }

  markMissionCompleted(missionId: number): void {
    const mission = this.missions.find(mission => mission.id === missionId);
    if (mission) {
      mission.status = 'Onaylandı';
    }
  }
}
