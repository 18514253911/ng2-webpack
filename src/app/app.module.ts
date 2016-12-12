import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {AppRoutingModule}  from './app.routing';

import {AppComponent} from './app.component';
import {BannerComponent} from './banner/banner.component';
import {LeftComponent} from './left/left.component';
import {LeftMenuComponent} from './left/leftmenu/leftmenu.component';
import {LeftMenuItemComponent} from './left/leftmenu/leftmenuitem/leftmenuitem.component';
import {HomeComponent} from './home/home.component';
@NgModule({
    imports:        [BrowserModule,RouterModule,AppRoutingModule],
    declarations:   [AppComponent,BannerComponent,LeftComponent,LeftMenuComponent,LeftMenuItemComponent,HomeComponent],
    bootstrap:      [AppComponent]
})
export class AppModule{}