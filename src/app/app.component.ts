import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-chess';
  ngOnInit(): void {
    let emitter;
    let getWindowEmitterMaxTriers = null;
    const waitForEmitterOnWindow = (resolve, reject) => {
      if (!getWindowEmitterMaxTriers) {
        getWindowEmitterMaxTriers = 10;
      }
      // @ts-ignore
      if (!window.emitter) {
        if (getWindowEmitterMaxTriers > 0) {
          setTimeout(waitForEmitterOnWindow.bind(this, resolve, reject), 300);
        }
      } else {
        resolve();
      }
    };
    const attachEmitter = () => new Promise((resolve, reject) => {
      waitForEmitterOnWindow(resolve, reject);
    });
    attachEmitter().then(() => {
      // @ts-ignore
      emitter = window.emitter;
      emitter.emit('hello', 'Angular MFE');
    });
  }
}
