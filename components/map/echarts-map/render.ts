import _echarts from '../../../utils/echarts-register'
import { extens } from '../../../core/echarts-extens'
import * as echarts from 'echarts'

export default async ({ $dom, $opt, $json, $markers, $icon, $regions }: any) => {
    echarts.registerMap('Map', $json)

    console.log($json)

    /**
     * 处理区域图标数据
     */
    const iconData = []

    if ($icon) {
        $json.features.forEach((x: any) => {
            iconData.push({ value: x.properties.centroid })
        })
    }

    /**
     * 导出配置项
     */
    const options = {
        tooltip: {
            show: true,
            showContent: false,
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: 'rgba(255, 255, 255, 0)',
            borderWidth: 0,
            extraCssText: 'box-shadow: 0 0 0;',
            formatter: (params: any) => {
                return `
                    <div class="echarts-map-tooltip">
                        <span class="item__name">林下参种植面积：</span>
                        <span class="item__value">158113亩</span>
                    </div>
                `
            },
            className: 'app-tooltip'
        },
        geo: {
            type: 'map',
            map: 'Map',
            aspectScale: 0.75,
            label: {
                show: false,
                color: '#fff',
                fontSize: 14,
                fontFamily: 'PingFang SC',
                formatter: (params: any) => {
                    return params.name
                }
            },
            emphasis: {
                itemStyle: {
                    borderColor: '#FCF903'
                }
            }

            // regions: $regions
        },
        series: [

            // 区域图标
            // {
            //     type: 'scatter',
            //     coordinateSystem: 'geo',
            //     symbolSize: [32, 40],
            //     symbol: `image://${$icon}`,

            //     // symbolRotate: 45,
            //     symbolOffset: [-25, -25],
            //     data: iconData,
            //     tooltip: {
            //         showContent: true
            //     }
            // },

            // 标点数据
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                symbolSize: [20, 20],

                // symbolRotate: 30,
                data: $markers,
                tooltip: {
                    showContent: true
                }
            }
        ]
    }

    /**
     * 继承配置项后渲染图表
     */
    return _echarts.render($dom, extens($opt, options))
}
