import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule}  from '@angular/common/http';
import { MapComponent } from './map/map.component';
import { FiltersComponent } from './filters/filters.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BuilderComponent } from './builder/builder.component';
import { SavedVisualizationsComponent } from './saved-visualizations/saved-visualizations.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GraphDataService } from './graph-data.service';
import { ImagesService } from './images.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    FiltersComponent,
    GalleryComponent,
    BuilderComponent,
    SavedVisualizationsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [GraphDataService, ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
