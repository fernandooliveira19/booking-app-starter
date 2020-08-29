import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'bkn-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Welcome do App!'

  constructor() { }

  ngOnInit() {
  }

}
