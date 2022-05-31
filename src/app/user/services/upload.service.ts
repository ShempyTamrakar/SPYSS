import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private httpClient:HttpClient) { }

  // public uploadfile(file: File):Observable<Data[]> {
  //   const formData: FormData = new FormData();
  //   formData.append('image', file, file.name);
  //   formData.append('file', file)
  //   return this.httpClient.post<Data[]>(`${baseUrl}/uploadFile`, formData)
  // }
  
}
