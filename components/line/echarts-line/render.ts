import _echarts from '../../../utils/echarts-register'
import { extens } from '../../../core/echarts-extens'
import { useStyle } from '../../../styles'
import { colorToRgba } from '../../../utils/color'

export default async ({ $dom, $opt, $data, $seriesColor, $smooth, $areaGradient }: any) => {
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
         * 渐变颜色
         */
        let gradientColor = 'rgba(0, 0, 0, 0)'
        if ($areaGradient) {
            const color1 = colorToRgba(color[index], 1)
            const color2 = colorToRgba(color[index], 0)

            gradientColor = {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                    {
                        offset: 0,
                        color: color1
                    },
                    {
                        offset: 1,
                        color: color2
                    }
                ]
            }
        }

        series.push({
            type: 'line',
            name: item.name,
            data: item.data,
            smooth: $smooth,
            itemStyle: {
                color: color[index]
            },
            areaStyle: {
                color: gradientColor
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
        yAxis: [{ ...$vertical.yAxis }],
        series
    }

    /**
     * 继承配置项后渲染图表
     */
    _echarts.render($dom, extens($opt, options))
}
