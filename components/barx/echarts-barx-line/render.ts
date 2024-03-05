import _echarts from '../../../utils/echarts-register'
import { extens } from '../../../core/echarts-extens'
import { useStyle } from '../../../styles'

export default async ({ $dom, $opt, $data, $seriesColor, $lineColor, $barWidth, $stack, $radius, $singleColor, $gradientColor, $showBackground, $debugger }: any) => {
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
        if (item.type === 'bar') {
            const data = []

            item.data.forEach((x: any, i: number) => {

                /**
                 * 常规颜色
                 */
                let _color = $singleColor ? color[i] : color[index]

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

                data.push({
                    value: x,
                    itemStyle: {
                        color: _color
                    }
                })
            })

            series.push({
                type: 'bar',
                name: item.name,
                data,
                barWidth: $barWidth,
                stack: $stack,
                itemStyle: {
                    borderRadius: $radius
                },
                showBackground: $showBackground
            })
        }

        if (item.type === 'line') {
            series.push({
                type: 'line',
                name: item.name,
                data: item.data,
                smooth: true,
                itemStyle: {
                    color: $lineColor
                },
                yAxisIndex: 1
            })
        }
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
        xAxis: [{ ...$vertical.xAxis, data: $data.axis }],
        yAxis: [
            { ...$vertical.yAxis, data: $data.axis },
            { ...$vertical.yAxis, data: $data.axis }
        ],
        series
    }

    /**
     * 继承配置项后渲染图表
     */
    _echarts.render($dom, extens($opt, options))

    if ($debugger) {
        console.log('echarts-barx', {
            extens: extens($opt, options)
        })
    }
}
