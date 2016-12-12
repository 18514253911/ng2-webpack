import {Component, Input, Output} from '@angular/core';

@Component({
    selector:'ba-menu',
    templateUrl:"./src/app/left/leftmenu/leftmenu.component.html",
    styleUrls:["./src/app/left/leftmenu/leftmenu.component.css"]
})
export class LeftMenuComponent {
    menuItems=[{
        id:1,
        name:"canvas倒计时",
        // children:[{
        //     id:2,
        //     name:"wqw2"
        // }]
    },{
        id:3,
        name:"wqw3",
        children:[{
            id:4,
            name:"wqw4",
            children:[{
                id:5,
                name:"22"
            },{
                id:5,
                name:"waa"
            }]
        }]
    },
    ]
}