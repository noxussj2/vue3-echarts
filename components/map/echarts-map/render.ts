import _echarts from '../../../utils/echarts-register'
import { extens } from '../../../core/echarts-extens'
import * as echarts from 'echarts'

export default async ({ $dom, $opt, $json, $markers, $icon, $regions }: any) => {
    echarts.registerMap('Map', $json)

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
        geo: {
            type: 'map',
            map: 'Map',
            aspectScale: 0.75,
            label: {
                show: true,
                color: '#fff',
                fontSize: 14,
                fontFamily: 'PingFang SC',
                formatter: (params: any) => {
                    return params.name
                }
            },
            emphasis: {

                // disabled: true
            },
            regions: $regions
        },
        series: [

            // 区域图标
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                symbolSize: [32, 40],
                symbol: `image://${$icon}`,
                symbolRotate: 30,
                symbolOffset: [-15, -25],
                data: iconData
            },

            // 标点数据
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                symbolSize: [20, 20],
                data: $markers
            }
        ]
    }

    /**
     * 继承配置项后渲染图表
     */
    return _echarts.render($dom, extens($opt, options))
}
