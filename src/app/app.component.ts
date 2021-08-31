import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status: boolean = true;
  lastname="Sardar Mudassar Ali Khan";
  // posts: object[]
  constructor()
  {
    
    this.getstatus();

  }

  getstatus()
  {
    this.status = true;
  }
  setalert()
  {
    alert('Hi Developer');
  }
  onmousehover()
  {
    alert('Hi Sardar Mudassar Ali Khan')
  }
}
