import _echarts from '../../../utils/echarts-register'
import { extens } from '../../../core/echarts-extens'
import { useStyle } from '../../../styles'

export default async ({ $dom, $opt, $data, $seriesColor, $barWidth, $gradientColor, $symbol }: any) => {
    const { $color, $grid, $tooltip, $vertical, $legend } = useStyle()

    /**
     * 过滤主题色
     */
    const color = $seriesColor || $color.theme

    /**
     * 数据处理
     */
    const series: any = []
    $data.series.forEach((item: any, index: number) => {

        /**
         * 常规颜色
         */
        let _color = color[index]

        /**
         * 渐变颜色
         */
        if ($gradientColor.length === 2) {
            _color = {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                    {
                        offset: 0,
                        color: $gradientColor[0]
                    },
                    {
                        offset: 1,
                        color: $gradientColor[1]
                    }
                ]
            }
        }

        series.push({
            type: 'pictorialBar',
            name: item.name,
            data: item.data,
            barWidth: $barWidth,
            symbol: $symbol,
            itemStyle: {
                color: _color
            }
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
