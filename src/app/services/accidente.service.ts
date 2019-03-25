import {Injectable} from '@angular/core';
import {Accidente, AccidenteTipo, Severidad} from '../shared/accidente';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/observable/of';
import 'rxjs-compat/add/operator/delay';
import {HttpClient} from '@angular/common/http';
import {baseURL} from '../shared/baseurl';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccidenteService {

  constructor(private http: HttpClient) {
  }

  getItems(): Observable<Accidente[]> {
    // return Observable.of(ITEMS).delay(2000);
    return <Observable<Accidente[]>>this.http.get(baseURL + 'accidentes');
  }

  getItem(id: number): Observable<Accidente> {
    return <Observable<Accidente>>this.http.get(baseURL + 'accidentes/' + id);
  }

  getFeaturedItem(): Observable<Accidente> {
    return <Observable<Accidente>>this.http.get(baseURL + 'accidentes?featured=true');
  }

  getItemIds(): Observable<number[]> {
    return <Observable<number[]>>this.http.get(baseURL + 'accidentes').pipe(map(items => (<Accidente[]>items).map(item => item.id)));
  }

  delete(accidente): Observable<Object> {
    return this.http.delete(baseURL + 'accidentes/' + accidente.id);
  }

  save(accidente): Observable<Accidente> {
    return <Observable<Accidente>>this.http.post(baseURL + 'accidentes/', accidente);
  }

  update(accidente): Observable<Accidente> {
    return <Observable<Accidente>>this.http.put(baseURL + 'accidentes/', accidente);
  }

}
