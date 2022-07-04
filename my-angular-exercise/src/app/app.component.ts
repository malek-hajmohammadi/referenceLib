import { Component } from '@angular/core';

@Component({
  selector: ' app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Malek Hajmohammadi';

  private add:number;
  private counter:number=0;

  startInterval(){

    console.log("startInterval()");
    this.start();

  }

  stopInterval(){
    console.log("endInterval()");
    clearInterval(this.add);

  }

  start() {
    this.add = setInterval(()=> {
      this.counter++;
      console.log(this.counter);

    }, 1000);
  }



}
