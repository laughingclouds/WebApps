import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-projects';

  clickSearchButtonNgVideoGameDB(): void {
    /**
     * This will click the class="search-button" of the id="ng-video-game-db" iframe.
     * The api was not being invoked by default hence this is a workaround.
    **/
    ((document.getElementById("ng-video-game-db") as HTMLIFrameElement).contentWindow?.document.getElementsByClassName("search-button")[0] as HTMLButtonElement).click();
  }

  clickToFillScreen(evt: MouseEvent): void {
    console.log("Event triggered");
    let iframe = evt.target as HTMLIFrameElement;
    // This will enlarge the iframe
    iframe.style.cssText = `border: 0px; height: 100vh; width: 100vh; padding: 0px;`;
  }
}