import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  getRequest(params: string): Observable<string> {
    return this.http.get<string>(`http://localhost:8081/hello`);
  }
}
