import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {


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

  ngOnInit() {
  }


}
