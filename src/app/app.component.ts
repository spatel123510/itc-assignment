import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showOneway :boolean=false;
  public showReturn :boolean=false;

  title = 'flightSearchEngine';
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileForm.value);
}
oneWayData(){
  this.showOneway=true;
  this.showReturn=false;
 
}
returnData(){
   this.showReturn=true;
   this.showOneway=false;

}
}
