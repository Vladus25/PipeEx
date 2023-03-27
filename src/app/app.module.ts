import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpperCasePipe } from './pipe/upper-case.pipe';
import { LowerCasePipe } from './pipe/lower-case.pipe';
import { MomentsPipe } from './pipe/moments.pipe';
import { GallaryComponent } from './components/gallary/gallary.component';
import { PipeUserPipe } from './pipe/pipe-user.pipe';
import { GenreFilterPipe } from './pipe/genre-filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { QuadratoDirective } from './directives/quadrato.directive';

@NgModule({
  declarations: [
    AppComponent,
    UpperCasePipe,
    LowerCasePipe,
    MomentsPipe,
    GallaryComponent,
    PipeUserPipe,
    GenreFilterPipe,
    QuadratoDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
