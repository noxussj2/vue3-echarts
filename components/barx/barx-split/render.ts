import _echarts from '../../../utils/echarts-register';
import { extens } from '../../../core/echarts-extens';
import { useStyle } from '../../../core/echarts-style';

export default ({ $dom, $opt, $data, $seriesColor, $barWidth }: any) => {
    const { $color, $grid, $tooltip, $xAxis, $yAxis, $legend } = useStyle();

    const series: any = [];

    $data.series.forEach((item: any) => {
        const data = [];

        item.data.forEach((x: any) => {
            data.push({ value: x, symbolSize: ['100%', 3], symbolRepeat: true, symbolMargin: 2 });
        });

        series.push({
            type: 'pictorialBar',
            name: item.name,
            data: data,
            barWidth: $barWidth,
            symbol: 'rect',
            barGap: '30%',
            label: {
                show: true,
                position: 'top',
                color: '#BBD3FB',
                fontFamily: 'D-DINExp',
            },
        });
    });

    /**
     * 导出配置项
     */
    const options = {
        color: $seriesColor || $color.theme,
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
