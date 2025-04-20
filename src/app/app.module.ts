import {AppRoutes} from './app.routes';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
    imports: [
        AppComponent,
        BrowserModule,
        AppRoutes,
        HttpClientModule,
    ],
    providers: [
    ],
    bootstrap: [AppComponent],
})

export class AppModule { }
