import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  receivedData: string = '';

  constructor(private cdr: ChangeDetectorRef) {}

  receiveDataFromChild(data: string) {
    this.receivedData = data;
  }

  ngAfterViewInit() {
    // Manually trigger change detection after the view has been initialized
    this.cdr.detectChanges();
  }
}
