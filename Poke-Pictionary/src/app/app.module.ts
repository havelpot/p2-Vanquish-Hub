import { NgModule,} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ArtWorkComponent } from './art-work/art-work.component';
import { PokePicturesComponent } from './poke-pictures/poke-pictures.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ArtworkService } from './artwork.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { CanvasComponent } from './canvas/canvas.component';
import { OktaAuthModule, OktaCallbackComponent, OktaConfig, OKTA_CONFIG } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';


export const oktaAuth = new OktaAuth({
  issuer: 'https://${dev-90042899.okta.com}/oauth2/default',
  clientId: '${0oa59q9qz5BHymi7r5d7}',
  redirectUri: window.location.origin + '/login/callback'
});

@NgModule({
  declarations: [
    
    AppComponent,
    UserComponent,
    ArtWorkComponent,
    PokePicturesComponent,
    NavBarComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    CanvasComponent,

    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule,
    FormsModule
  ],
  exports:[
    NavBarComponent,
    ArtWorkComponent
  
  ],
  providers: [ArtworkService, {OKTA_CONFIG, useValue:{oktaAuth}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
