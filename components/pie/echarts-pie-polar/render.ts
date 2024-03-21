import _echarts from '../../../utils/echarts-register'
import { extens } from '../../../core/echarts-extens'
import { useStyle } from '../../../styles'

export default async ({ $dom, $opt, $data, $seriesColor, $barWidth, $radius, $legend, $center }: any) => {
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
     * 处理数据
     */
    const axis = $data.map((item: any) => item.name)
    const data = $data.map((item: any) => item.value)

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
        angleAxis: {
            max: 10,
            startAngle: 90,
            endAngle: 360,
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            clockwise: false
        },
        radiusAxis: {
            type: 'category',
            axisLabel: {
                show: true,
                margin: -10,
                interval: 0,
                align: 'left',
                color: '#fff',
                formatter: function (value) {
                    return value + ' 万亩'
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                alignWithLabel: true
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(0, 137, 255, 0.1)',
                    width: 8
                }
            },
            data
        },
        polar: {
            radius: $radius,
            center: $center
        },
        series: [
            {
                name: axis[0],
                type: 'bar',
                data: [4, 0],
                coordinateSystem: 'polar',
                barWidth: $barWidth,
                itemStyle: {
                    barBorderRadius: 15
                },
                stack: true
            },
            {
                name: axis[1],
                type: 'bar',
                data: [0, 4],
                coordinateSystem: 'polar',
                barWidth: $barWidth,
                itemStyle: {
                    barBorderRadius: 15
                },
                stack: true
            }
        ]
    }

    /**
     * 继承配置项后渲染图表
     */
    _echarts.render($dom, extens($opt, options))
}
