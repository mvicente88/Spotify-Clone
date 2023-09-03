import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { GenericSectionComponent } from './components/generic-section/generic-section.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { RouterModule } from '@angular/router';
import { OrderListPipe } from './pipe/order-list.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    UserHeaderComponent,
    CardPlayerComponent,
    GenericSectionComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    OrderListPipe,
    ImgBrokenDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    UserHeaderComponent,
    CardPlayerComponent,
    GenericSectionComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    OrderListPipe,
    ImgBrokenDirective
  ]
})
export class SharedModule { }
