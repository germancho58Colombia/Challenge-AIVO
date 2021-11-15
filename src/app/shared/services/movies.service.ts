import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { IMenu } from './menu.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { MenuService } from 'src/app/shared/services/menu.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  constructor(private logService: LogService, private http: HttpClient) { }


  obtnerMovies(): Observable<any>{
    return this.http.get<any>(environment.apiURL);
  }


}
