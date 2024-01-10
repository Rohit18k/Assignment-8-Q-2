import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() sendDataToParent = new EventEmitter<string>();
  receivedData: string = '';

  ngOnInit() {
    this.sendDataToParent.emit('Hello from Parent');
  }
}
