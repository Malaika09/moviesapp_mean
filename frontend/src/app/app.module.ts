import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from 'src/components/sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';

import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';

import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    LoginComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatPaginatorModule,
    SocialLoginModule,
    GoogleSigninButtonModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '403710484746-bnpe1nuegc7skc8amlm8pouiia82d7oc.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
