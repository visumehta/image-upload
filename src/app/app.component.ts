import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'image-upload';
  url:String= '';
  sendData = {name: '', size: '', type: ''};
  constructor(private httpClient: HttpClient) {}

  onSelectFile(event:any) {
    if (event.target.files) {
      console.log(event.target.files);
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e:any) => {
        this.url = e.target.result;
      }
    }
    this.sendData.name = event.target.files[0].name;
    this.sendData.size = event.target.files[0].size;
    this.sendData.type = event.target.files[0].type;
  
  }

  upload() {
    this.httpClient.post('http://localhost:3000/posts', this.sendData).subscribe((res: any) => {
      console.log(res);
    });
  }
}
