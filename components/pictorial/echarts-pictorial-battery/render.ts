import _echarts from '../../../utils/echarts-register'
import { extens } from '../../../core/echarts-extens'
import { useStyle } from '../../../styles'

export default async ({ $dom, $opt, $data, $seriesColor, $barWidth }: any) => {
    const { $color, $grid, $tooltip, $vertical, $legend } = useStyle()

    /**
     * 过滤主题色
     */
    const color = $seriesColor || $color.theme

    /**
     * 数据处理
     */
    const series: any = []
    $data.series.forEach((item: any) => {
        const data = []

        item.data.forEach((x: any) => {
            data.push({ value: x, symbolSize: ['100%', 3], symbolRepeat: true, symbolMargin: 2 })
        })

        series.push({
            type: 'pictorialBar',
            name: item.name,
            data,
            barWidth: $barWidth,
            symbol: 'rect',
            barGap: '30%'
        })
    })

    /**
     * 导出配置项
     */
    const options = {
        color,
        grid: $grid,
        tooltip: Object.assign(
            {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            $tooltip
        ),
        legend: Object.assign({}, $legend),
        xAxis: Object.assign({ data: $data.axis }, $vertical.xAxis),
        yAxis: [Object.assign({}, $vertical.yAxis)],
        series
    }

    /**
     * 继承配置项后渲染图表
     */
    _echarts.render($dom, extens($opt, options))
}
