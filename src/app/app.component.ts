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
}