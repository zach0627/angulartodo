import { Component, OnInit } from '@angular/core';
import { UiStateService } from '../../services/ui-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'Angular Todo';
  showAddTask:boolean = false;
  subscription:Subscription;


  constructor(private uiStateService:UiStateService) {
    this.subscription = this.uiStateService.onToggle().subscribe((value) => (this.showAddTask = value));
   }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiStateService.toggleAddTask();
  }

}
