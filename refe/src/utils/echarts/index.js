import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { CustomChart } from 'echarts/charts';
import {
    DatasetComponent,
    PolarComponent,
    TooltipComponent
} from 'echarts/components';

var ROOT_PATH = 'https://echarts.apache.org/examples';
var _panelImageURL = ROOT_PATH + '/data/asset/img/custom-gauge-panel.png';
var _animationDuration = 1000;
var _animationDurationUpdate = 1000;
var _animationEasingUpdate = 'quarticInOut';
var _valOnRadianMax = 200;
var _outerRadius = 200;
var _innerRadius = 170;
var _pointerInnerRadius = 40;
var _insidePanelRadius = 140;
// var _currentDataIndex = 0;
function renderItem(params, api) {
    var valOnRadian = api.value(1);
    var coords = api.coord([api.value(0), valOnRadian]);
    var polarEndRadian = coords[3];
    var imageStyle = {
        image: _panelImageURL,
        x: params.coordSys.cx - _outerRadius,
        y: params.coordSys.cy - _outerRadius,
        width: _outerRadius * 2,
        height: _outerRadius * 2
    };
    return {
        type: 'group',
        children: [
            {
                type: 'image',
                style: imageStyle,
                clipPath: {
                    type: 'sector',
                    shape: {
                        cx: params.coordSys.cx,
                        cy: params.coordSys.cy,
                        r: _outerRadius,
                        r0: _innerRadius,
                        startAngle: 0,
                        endAngle: -polarEndRadian,
                        transition: 'endAngle',
                        enterFrom: { endAngle: 0 }
                    }
                }
            },
            {
                type: 'image',
                style: imageStyle,
                clipPath: {
                    type: 'polygon',
                    shape: {
                        points: makePionterPoints(params, polarEndRadian)
                    },
                    extra: {
                        polarEndRadian: polarEndRadian,
                        transition: 'polarEndRadian',
                        enterFrom: { polarEndRadian: 0 }
                    },
                    during: function (apiDuring) {
                        apiDuring.setShape(
                            'points',
                            makePionterPoints(params, apiDuring.getExtra('polarEndRadian'))
                        );
                    }
                }
            },
            {
                type: 'circle',
                shape: {
                    cx: params.coordSys.cx,
                    cy: params.coordSys.cy,
                    r: _insidePanelRadius
                },
                style: {
                    fill: '#fff',
                    shadowBlur: 25,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: 'rgba(76,107,167,0.4)'
                }
            },
            {
                type: 'text',
                extra: {
                    valOnRadian: valOnRadian,
                    transition: 'valOnRadian',
                    enterFrom: { valOnRadian: 0 }
                },
                style: {
                    text: makeText(valOnRadian),
                    fontSize: 50,
                    fontWeight: 700,
                    x: params.coordSys.cx,
                    y: params.coordSys.cy,
                    fill: 'rgb(0,50,190)',
                    align: 'center',
                    verticalAlign: 'middle',
                    enterFrom: { opacity: 0 }
                },
                during: function (apiDuring) {
                    apiDuring.setStyle(
                        'text',
                        makeText(apiDuring.getExtra('valOnRadian'))
                    );
                }
            }
        ]
    };
}
function convertToPolarPoint(renderItemParams, radius, radian) {
    return [
        Math.cos(radian) * radius + renderItemParams.coordSys.cx,
        -Math.sin(radian) * radius + renderItemParams.coordSys.cy
    ];
}
function makePionterPoints(renderItemParams, polarEndRadian) {
    return [
        convertToPolarPoint(renderItemParams, _outerRadius, polarEndRadian),
        convertToPolarPoint(
            renderItemParams,
            _outerRadius,
            polarEndRadian + Math.PI * 0.03
        ),
        convertToPolarPoint(renderItemParams, _pointerInnerRadius, polarEndRadian)
    ];
}
function makeText(valOnRadian) {
    // Validate additive animation calc.
    if (valOnRadian < -10) {
        alert('illegal during val: ' + valOnRadian);
    }
    return ((valOnRadian / _valOnRadianMax) * 100).toFixed(0) + '%';
}

let option = {
    animationEasing: _animationEasingUpdate,
    animationDuration: _animationDuration,
    animationDurationUpdate: _animationDurationUpdate,
    animationEasingUpdate: _animationEasingUpdate,
    dataset: {
        source: [[1, 156]]
    },
    tooltip: {},
    angleAxis: {
        type: 'value',
        startAngle: 0,
        show: false,
        min: 0,
        max: _valOnRadianMax
    },
    radiusAxis: {
        type: 'value',
        show: false
    },
    polar: {},
    series: [
        {
            type: 'custom',
            coordinateSystem: 'polar',
            renderItem: renderItem
        }
    ]
};
echarts.use([
    DatasetComponent,
    PolarComponent,
    TooltipComponent,
    CustomChart,
    CanvasRenderer
]);
const MyEcharts = ({ style, chartData }) => {
    const chartRef = useRef(null);
    useEffect(() => {
        let myChart = echarts.init(chartRef.current);
        option && myChart.setOption(option);
    }, [chartData])

    return (
        <div ref={chartRef} style={style}></div>
    )
}

export default MyEcharts;