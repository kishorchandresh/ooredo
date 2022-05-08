import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) { }
  
  public getRequest(requestUrl = 'https://run.mocky.io/v3/5ffdc9f7-47a0-44a7-97cd-acd5d9284ea7'){
		
    return this.httpClient.get(requestUrl).toPromise().then((res:any) => {
      return res;
    })
    .catch(this.handleError);
  }

  public getGraphData(requestUrl ='https://run.mocky.io/v3/9a427012-9533-47ea-8442-59c2680aab3e')
  {
		
    return this.httpClient.get(requestUrl).toPromise().then((res:any) => {
      return res;
    })
    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    return Promise.reject(error.message || error);
  }
}
