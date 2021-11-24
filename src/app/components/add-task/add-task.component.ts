import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiStateService } from '../../services/ui-state.service';
import { Subscription } from 'rxjs';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  item: string;
  content: string;
  date: string;
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiStateService: UiStateService) {
    this.subscription = this.uiStateService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.item || !this.content) {
      alert('Please add a item & content');
      return;
    }

    const newTask = {
      item: this.item,
      content: this.content,
      date: this.date
    }

    this.onAddTask.emit(newTask);

    this.item = '';
    this.content = '';
    this.date = '';
  }

}
