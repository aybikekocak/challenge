import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestioningService {
  private apiUrl = 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/Feat\n' +
    'ureServer/0/query';

  constructor(private http: HttpClient) { }

  getQuestioningData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
