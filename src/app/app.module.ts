import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { RouterModule, Route } from '@angular/router';
import { D3Service, D3_DIRECTIVES } from './d3';
import { MarkdownModule } from 'ngx-md';

import { AppComponent } from './app.component';

import { GraphComponent } from './visuals/graph/graph.component';
import { SHARED_VISUALS } from './visuals/shared';
import { PlayComponent } from './components/play/play.component';
import { ScrollSpy } from './components/scrollspy.directive';
import { CharacterLabelComponent } from './components/character-label/character-label.component';
import { SceneComponent } from './components/scene/scene.component';}
import { PlayService } from './services/play.service';
import { SectionComponent } from './components/section/section.component';

const getWindow = () => window;

const ROUTES = [{path: '', component: PlayComponent}];
@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES,
    PlayComponent,
    ScrollSpy,
    CharacterLabelComponent,
    SceneComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    MarkdownModule.forRoot(),
    HttpModule,
    ClarityModule
  ],
  providers: [D3Service, PlayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
