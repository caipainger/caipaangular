import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FooterModule } from './shared/components/footer/footer.module';
import { HeaderModule } from './shared/components/header/header.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule, BUCKET, GetDownloadURLPipeModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterModule,
    HeaderModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    GetDownloadURLPipeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [{provide: BUCKET, useValue:'gs://caipaingprod.appspot.com'}, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
