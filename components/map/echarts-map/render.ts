import _echarts from '../../../utils/echarts-register'
import { extens } from '../../../core/echarts-extens'
import * as echarts from 'echarts'

export default async ({ $dom, $opt, $json, $data }: any) => {
    echarts.registerMap('tonghua', $json)

    /**
     * 导出配置项
     */
    const options = {
        geo: {
            type: 'map',
            map: 'tonghua',
            aspectScale: 0.75,
            emphasis: {
                disabled: true
            }
        },
        series: [
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                symbolSize: 5,
                itemStyle: {
                    color: '#F0542A'
                },
                data: $data
            }
        ]
    }

    /**
     * 继承配置项后渲染图表
     */
    _echarts.render($dom, extens($opt, options))
}
