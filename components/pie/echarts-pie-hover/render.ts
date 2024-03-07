import _echarts from '../../../utils/echarts-register'
import { extens } from '../../../core/echarts-extens'
import { useStyle } from '../../../styles'

export default async ({ $dom, $opt, $data, $seriesColor, $radius, $label, $center, $legend }: any) => {
    const { $color, $tooltip } = useStyle()

    /**
     * 过滤主题色
     */
    const color = $seriesColor || $color.theme

    /**
     * 图例格式化
     */
    const legend = {
        show: $legend,
        orient: 'vertical',
        top: 'center',
        right: 10,
        itemWidth: 5,
        itemHeight: 5,
        itemGap: 15,
        textStyle: {
            color: $color.legendLabel
        }
    }
    if ($legend) {
        const total = $data.reduce((prev: number, next: any) => prev + next.value, 0)

        legend.formatter = (name: string) => {
            const find = $data.find((item: any) => item.name === name)
            const percent = ((find.value / total) * 100).toFixed(2)
            return `${name}  ${percent}${'%'}`
        }
    }

    /**
     * 导出配置项
     */
    const options = {
        color,
        tooltip: Object.assign(
            {
                trigger: 'item'
            },
            $tooltip
        ),
        legend,
        series: [
            {
                type: 'pie',
                data: $data,
                radius: $radius,
                center: $center,
                label: {
                    show: $label,
                    color: $color.seriesLabel
                },
                labelLine: {
                    show: $label
                }
            }
        ]
    }

    /**
     * 继承配置项后渲染图表
     */
    return _echarts.render($dom, extens($opt, options))
}
