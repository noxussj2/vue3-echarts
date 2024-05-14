import _echarts from '../../../utils/echarts-register'
import { extens } from '../../../core/echarts-extens'
import { useStyle } from '../../../styles'

export default async ({ $dom, $opt, $data, $symbol, $symbolSize }: any) => {
    const { $color, $grid, $tooltip, $horizontal, $legend } = useStyle()

    /**
     * 数据处理
     */
    const series: any = []
    let max = 0
    $data.series.forEach((item: any) => {
        max = Math.max(...item.data)

        series.push({
            type: 'pictorialBar',
            name: item.name,
            data: item.data,
            symbol: $symbol,
            symbolRepeat: 'fixed',
            symbolMargin: '10%',
            symbolClip: true,
            symbolSize: $symbolSize,
            symbolBoundingData: max,
            z: 10
        })

        series.push({
            type: 'pictorialBar',
            name: item.name,
            data: item.data,
            symbol: $symbol,
            symbolRepeat: 'fixed',
            symbolMargin: '10%',
            symbolSize: $symbolSize,
            symbolBoundingData: max,
            itemStyle: {
                opacity: 0.2
            },
            z: 5
        })
    })

    /**
     * 导出配置项
     */
    const options = {
        color: $color.theme,
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
        legend: { ...$legend, show: false },
        xAxis: { ...$horizontal.xAxis, max },
        yAxis: { ...$horizontal.yAxis, data: $data.axis },
        series
    }

    /**
     * 继承配置项后渲染图表
     */
    _echarts.render($dom, extens($opt, options))
}
