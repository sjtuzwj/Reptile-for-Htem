import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as xrdjson from '../../assets/xrd.json';
import * as elejson from '../../assets/ele.json';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  public optoption: any;
  public eleoption: any;
  private xyzdata: Array<number[]> = new Array<number[]>();
  constructor(private http: HttpClient) { }
  optInit() {
    this.optoption = {
        title: {
            text: '光谱分析'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['transmittance', 'reflectance', 'absorbility']
        },
        toolbox: {
            feature: {
                saveAsImage: {},
                dataZoom : {},
                dataZoomReset: {},
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                axisLabel: {
                    formatter: '{value}nm'
                },
                type : 'category',
                boundaryGap : false,
                data : xrdjson[3]
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name: 'transmittance',
                type: 'line',
                stack: '比例',
                lineStyle: { color: 'rgba(175,175,175,1)'},
                areaStyle: { color: 'rgba(205,205,205,0.7)'},
                data: xrdjson[1]
            },
            {
                name: 'reflectance',
                type: 'line',
                stack:  '比例',
                lineStyle: { color:  {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [
                        {offset: 0, color: '#FF0000'},
                        {offset: 0.17, color: '#FF7D00'},
                        {offset: 0.34, color: '#FFFF00'},
                        {offset: 0.5, color: '#00FF00'},
                        {offset: 0.67, color: '#00FFFF'},
                        {offset: 0.84, color: '#0000FF'},
                        {offset: 1, color: '#FF00FF'},
                    ]
                }},
                areaStyle: { color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [
                        {offset: 0, color: '#FF0000'},
                        {offset: 0.17, color: '#FF7D00'},
                        {offset: 0.34, color: '#FFFF00'},
                        {offset: 0.5, color: '#00FF00'},
                        {offset: 0.67, color: '#00FFFF'},
                        {offset: 0.84, color: '#0000FF'},
                        {offset: 1, color: '#FF00FF'},
                    ]
                }
            },
                data: xrdjson[0]
            },
            {
                name: 'absorbility',
                type: 'line',
                stack: '比例',
                lineStyle: { color: 'rgba(5,5,5,1)'},
                areaStyle: {  color: 'rgba(5,5,5,1)'},
                data: xrdjson[2]
            }
        ]
    };
 }
 eleInit() {
    this.eleoption = {
        title: {
            text: '电学性质分析'
        },
        grid3D: {},
        tooltip: {},
        xAxis3D: {
            type: 'value'
            },
            yAxis3D: {
                type: 'value'
            },
            zAxis3D: {
                type: 'value'},
            visualMap: {
                max: 2,
                dimension: 'resistance'
            },
            dataset: {
                dimensions: [
                    'x',
                    'y',
                    'z',
                    'resistance'
                ],
                source: [[5.4,6.65,34691.2891560581,2.0317976563],[9.4,6.65,34336.1550785577,1.6566153045],[13.4,6.65,34565.7402356969,1.2836426964],[17.4,6.65,33923.189756825,0.9736761265],[21.4,6.65,33037.5481646155,0.7404620306],[25.4,6.65,33910.9958438684,0.5198372847],[29.4,6.65,33637.4721439684,0.3739942153],[33.4,6.65,32292.1066466197,0.2788202733],[37.4,6.65,32696.118676448,0.1963090807],[41.4,6.65,33687.4558694328,0.1375329742],[45.4,6.65,34503.7345117049,0.1008600388],[5.4,19.15,37352.4159355865,1.6777300325],[9.4,19.15,34984.6802085367,1.4544929294],[13.4,19.15,35109.8569870195,1.1132853664],[17.4,19.15,35350.8037005221,0.8200322755],[21.4,19.15,34131.2887326131,0.608598174],[25.4,19.15,35471.5840687184,0.415189521],[29.4,19.15,34978.2312977518,0.2946009452],[33.4,19.15,35195.8756065129,0.2053250523],[37.4,19.15,33344.3036092208,0.1523619164],[41.4,19.15,32590.1794708593,0.1107125232],[45.4,19.15,34909.7774257321,0.0750388628],[5.4,31.65,41316.0142110563,1.4656072508],[9.4,31.65,40031.9294669428,1.2443874343],[13.4,31.65,38970.2804846968,0.9856177457],[17.4,31.65,37508.4487780873,0.746684838],[21.4,31.65,39063.0798425914,0.5071333361],[25.4,31.65,38083.3270813205,0.3615663613],[29.4,31.65,39684.4924115314,0.2389585307],[33.4,31.65,37372.8668501924,0.1750213872],[37.4,31.65,36739.4070186228,0.1244983349],[41.4,31.65,39779.5892518732,0.0815772626],[45.4,31.65,37449.8452946891,0.0639482214],[5.4,44.15,45340.5551769619,1.3859563421],[9.4,44.15,43284.5530848252,1.2167467664],[13.4,44.15,43339.5930152178,0.9422573485],[17.4,44.15,39942.2754235579,0.7426164305],[21.4,44.15,41120.9911145762,0.5069272271],[25.4,44.15,39290.2298557027,0.3633995029],[29.4,44.15,43618.028203417,0.2238666075],[33.4,44.15,41034.3276771616,0.1636448159],[37.4,44.15,44327.8523421507,0.1041241738],[41.4,44.15,41906.1428119441,0.0798209708],[45.4,44.15,40477.3084208993,0.0618494929]]
            },
            series: [
                {
                    name: 'Electric',
                    barSize: 10,
                    bevelSize: 0.4,
                    bevelSmoothness: 4,
                    barCateGoryGap: '1%',
                    type: 'bar3D',
                    shading: 'lambert',
                    encode: {
                        x: 'x',
                        y: 'y',
                        z: 'z',
                        tooltip: [0, 1, 2, 3]
                    }
                }
            ]
        };
 }
    ngOnInit() {
    this.optInit();
    this.eleInit();
}
}
