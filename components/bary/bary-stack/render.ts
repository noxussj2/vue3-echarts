import _echarts from '../../../utils/echarts-register';
import { extens } from '../../../core/echarts-extens';
import { useStyle } from '../../../core/echarts-style';

export default ({ $dom, $opt, $data, $seriesColor, $barWidth }: any) => {
    const { $color, $grid, $tooltip, $xAxis, $yAxis, $legend } = useStyle();

    const series: any = [];

    $data.series.forEach((item: any) => {
        series.push({
            type: 'bar',
            name: item.name,
            data: item.data,
            barWidth: $barWidth,
            stack: true,
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
        xAxis: Object.assign({}, $xAxis.horizontal),
        yAxis: [Object.assign({ data: $data.axis }, $yAxis.horizontal)],
        series: series,
    };

    /**
     * 继承配置项后渲染图表
     */
    _echarts.render($dom, extens($opt, options));
};
