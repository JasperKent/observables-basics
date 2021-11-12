import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('button') button!: ElementRef<HTMLButtonElement>;
  
  interval$ = interval (1000).pipe(
    map (count => count * 6),
    tap (degrees => console.log('Value is ', degrees))
  );

  values: (string|number)[] = []

  ngAfterViewInit(): void {
    fromEvent(this.button.nativeElement, 'click').subscribe(
      ev => this.values.push('Click')
    );
  }
}
