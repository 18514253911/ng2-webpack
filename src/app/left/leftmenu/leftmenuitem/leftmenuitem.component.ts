import {Component, Input, Output} from '@angular/core';

@Component({
    selector:'ba-menu-item',
    templateUrl:'./src/app/left/leftmenu/leftmenuitem/leftmenuitem.component.html',
    styleUrls:['./src/app/left/leftmenu/leftmenuitem/leftmenuitem.component.css']
})
export class LeftMenuItemComponent {
    @Input() menuItem:any;
}