import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@Component({
    standalone: true,
    imports: [NxWelcomeComponent, HomePageComponent, RouterModule],
    selector: 'angular-monorepo-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-shop';
}
