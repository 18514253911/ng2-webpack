import {Component,OnInit,ViewChild,ElementRef} from '@angular/core';
import * as echarts from 'echarts';
import { option } from './options';
@Component({
    selector: 'my-app',
    template: `<h1>My First App</h1>
    <div #da style="width:300px;height:300px"></div>
    `
})

export class AppComponent implements OnInit{
    @ViewChild('da')   da:ElementRef;
  
    ngOnInit() { 
        var myChart = echarts.init(this.da.nativeElement);

        myChart.setOption(option);
    }
}
