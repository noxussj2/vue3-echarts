import _echarts from '../../../utils/echarts-register'
import { extens } from '../../../core/echarts-extens'
import { useStyle } from '../../../styles'

export default async ({ $dom, $opt, $data, $seriesColor, $radius, $label, $center, $legend, $roseType, $carousel }: any) => {
    const { $color, $tooltip } = useStyle()

    /**
     * 过滤主题色
     */
    const color = $seriesColor || $color.theme

    /**
     * 图例格式化
     */
    const legend: any = {
        show: $legend,
        orient: 'vertical',
        top: 'center',
        right: 10,
        itemWidth: 5,
        itemHeight: 5,
        itemGap: 15,
        textStyle: {
            color: $color.legendLabel
        },
        selectedMode: true
    }

    if ($carousel) {
        legend.selectedMode = false
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

            /**
             * 主图
             */
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
                },
                roseType: $roseType,
                emphasis: {
                    disabled: true
                }
            },

            /**
             * 半透明花瓣
             */
            {
                type: 'pie',
                data: $data,
                radius: $radius,
                center: $center,
                itemStyle: {
                    opacity: 0.5
                },
                label: {
                    show: false,
                    color: $color.seriesLabel
                },
                labelLine: {
                    show: false
                },
                emphasis: {
                    scaleSize: 20
                }
            }
        ]
    }

    /**
     * 继承配置项后渲染图表
     */
    return await _echarts.render($dom, extens($opt, options))
}
