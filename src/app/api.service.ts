import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  // login(username: string) {
  //   this.http.post('1/login')
  // }

  get_games() {
    console.log('Hey! Someone called get_games')
    return this.http.get('/1/games')
  }
}
