import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ';
   obs=new Observable(subscriber=>{
     subscriber.next(1);
    subscriber.next(2);
  subscriber.next(3);
setTimeout(()=>{
  subscriber.error('error occured')
  subscriber.next(4);
  subscriber.complete();
},2000)})


showTheObs(){
  this.obs.subscribe(data=>
      console.log(data))
  }

   
}
