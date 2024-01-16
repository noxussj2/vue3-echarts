import _echarts from '../../../utils/echarts-register';
import { extens } from '../../../core/echarts-extens';
import { useStyle } from '../../../core/echarts-style';

export default ({ $dom, $opt, $data, $seriesColor, $barWidth }: any) => {
    const { $color, $grid, $tooltip, $xAxis, $yAxis, $legend } = useStyle();

    const series: any = [];

    $data.series.forEach((item: any, index: number) => {
        let itemStyle = {
            color: $seriesColor[index] || $color.theme[index],
        };

        if ($seriesColor && typeof $seriesColor[0] === 'object') {
            itemStyle.color = {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                    {
                        offset: 0,
                        color: $seriesColor[index][0],
                    },
                    {
                        offset: 1,
                        color: $seriesColor[index][1],
                    },
                ],
            };
        }

        series.push({
            type: 'pictorialBar',
            name: item.name,
            data: item.data,
            barWidth: $barWidth,
            symbol: 'triangle',
            itemStyle,
            barGap: '-50%',
        });
    });

    /**
     * 导出配置项
     */
    const options = {
        // color: $seriesColor || $color.theme,
        grid: $grid,
        tooltip: Object.assign(
            {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                },
            },
            $tooltip
        ),
        legend: Object.assign({}, $legend),
        xAxis: Object.assign({ data: $data.axis }, $xAxis.vertical),
        yAxis: [Object.assign({}, $yAxis.vertical)],
        series: series,
    };

    /**
     * 继承配置项后渲染图表
     */
    _echarts.render($dom, extens($opt, options));
};
