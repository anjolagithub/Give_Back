import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Give_Back';
  public me = 'Academy';
  public value = '';
  public image = 'asset/image'
  onClick() {
    console.log('Thank you for Subscribing');
  }
  submit(login: any) {
    console.log('form sunbmitted',login)
  }
}
