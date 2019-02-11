// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// App
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
        {
            path: '',
            component: HomeComponent
        }
    ];

@NgModule({
    declarations: [
        AppComponent,
        SiteHeaderComponent,
        SiteFooterComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true,
        }),
    ],
    providers: [],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule { }
