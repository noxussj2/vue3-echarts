import _echarts from '../../../utils/echarts-register'
import { extens } from '../../../core/echarts-extens'
import { useStyle } from '../../../styles'

export default async ({ $dom, $opt, $data, $seriesColor, $barWidth, $stack, $radius, $singleColor, $showBackground, $label }: any) => {
    const { $color, $grid, $tooltip, $horizontal, $legend } = useStyle()

    /**
     * 过滤主题色
     */
    const color = $seriesColor || $color.theme

    /**
     * 数据处理
     */
    const series: any = []
    $data.series.forEach((item: any, index: number) => {
        const data: any = []

        item.data.forEach((x: any, i: number) => {

            /**
             * 常规颜色
             */
            const _color = $singleColor ? color[i] : color[index]

            data.push({
                value: x,
                itemStyle: {
                    color: _color
                },
                symbolSize: [3, '100%'],
                symbolRepeat: true,
                symbolMargin: 2
            })
        })

        series.push({
            type: 'pictorialBar',
            name: item.name,
            data,
            barWidth: $barWidth,
            stack: $stack,
            label: {
                show: $label,
                position: 'right',
                color: $color.seriesLabel
            },
            itemStyle: {
                borderRadius: $radius
            },
            showBackground: $showBackground,
            symbol: 'rect',
            barGap: '30%'
        })
    })

    /**
     * 导出配置项
     */
    const options = {
        color,
        grid: {
            top: 20,
            right: 20,
            left: 0,
            bottom: 10,
            containLabel: true
        },
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
        xAxis: [Object.assign({}, $horizontal.xAxis)],
        yAxis: [Object.assign({ data: $data.axis }, $horizontal.yAxis)],
        series
    }

    /**
     * 继承配置项后渲染图表
     */
    _echarts.render($dom, extens($opt, options))
}
