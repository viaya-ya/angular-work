import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { CatalogComponent } from './pages/catalog/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ContactComponent,
    AboutComponent,
    CatalogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
