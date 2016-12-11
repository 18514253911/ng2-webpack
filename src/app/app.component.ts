import {Component,OnInit} from '@angular/core';
import * as echarts from 'echarts';
@Component({
    selector: 'my-app',
    template: '<h1>My First App</h1>'
})

export class AppComponent implements OnInit{
 ngOnInit() { 
    console.log(echarts);
     
    }
}
