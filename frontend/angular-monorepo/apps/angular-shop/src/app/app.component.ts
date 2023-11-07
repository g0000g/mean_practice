import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from '@angular-monorepo/ui';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
    standalone: true,
    imports: [
        NxWelcomeComponent,
        HomePageComponent,
        HeaderComponent,
        FooterComponent,
        RouterModule,
        UiModule
    ],
    selector: 'eshop-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'angular-shop';
}
