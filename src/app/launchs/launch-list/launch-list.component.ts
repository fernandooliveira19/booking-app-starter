import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Launch } from '../launch.model';
import { LaunchService} from '../launch.service';

@Component({
  selector: 'bkn-launch-list',
  templateUrl: './launch-list.component.html'
})
export class LaunchListComponent implements OnInit {

  launchs : Launch[];

  constructor(private launchService: LaunchService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.findNextLaunchs();
  }

  findNextLaunchs(){
    this.launchService.findNextLaunchs()
    .subscribe(response => this.launchs = response);

  } 

}
