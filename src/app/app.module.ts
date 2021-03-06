import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoGridComponent } from './video-grid/video-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
