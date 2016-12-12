import {Component,OnInit,ViewChild,ElementRef} from '@angular/core';
// import * as echarts from 'echarts';
@Component({
    selector: 'my-app',
    template: `
    <ba-page-top></ba-page-top>
    <ba-sidebar></ba-sidebar>
    <div style="position:absolute;top:60px;left:180px;bottom:0px;right:0px">
      <router-outlet></router-outlet>
    </div>
  `,
})

export class AppComponent implements OnInit{
    // @ViewChild('da')   da:ElementRef;
  
    ngOnInit() { 
        // var myChart = echarts.init(this.da.nativeElement);

        // myChart.setOption(option);
    }
}
