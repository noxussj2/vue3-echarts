import _echarts from '../../../utils/echarts-register';
import { extens } from '../../../core/echarts-extens';
import { useStyle } from '../../../core/echarts-style';

export default ({ $dom, $opt, $data, $seriesColor, $areaGradient, $barWidth }: any) => {
    const { $color, $grid, $tooltip, $xAxis, $yAxis, $legend } = useStyle();

    const axis: any = [];

    /**
     * 获取 axis 数据
     */
    $data.forEach((x: any) => {
        if (axis.includes(x.name) === false) {
            axis.push(x.name);
        }
    });

    /**
     * 获取 series 数据
     */
    const series = Array(axis.length).fill(0);
    const dates = {};

    $data.forEach((x: any) => {
        if (!dates[x.date]) dates[x.date] = Array(axis.length).fill(0);

        const index = axis.indexOf(x.name);

        dates[x.date][index] = x.value;
    });

    /**
     * 导出配置项
     */
    const options = {
        color: $seriesColor || $color.theme,
        title: {
            text: $data[0].date,
            left: 12,
        },
        grid: $grid,
        tooltip: Object.assign(
            {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                },
            },
            $tooltip
        ),
        legend: Object.assign({}, $legend),
        xAxis: {
            ...$xAxis.horizontal,
            max: 'dataMax',
        },
        yAxis: [
            {
                ...$yAxis.horizontal,
                data: axis,
                inverse: true,
                animationDuration: 300,
                animationDurationUpdate: 300,
                max: 10, // only the largest 3 bars will be displayed
            },
        ],
        series: [
            {
                realtimeSort: true,
                name: '引流数',
                type: 'bar',
                data: series,
                label: {
                    show: true,
                    position: 'right',
                    valueAnimation: true,
                    color: '#fff',
                },
            },
        ],
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear',
    };

    /**
     * 继承配置项后渲染图表
     */
    const ecahrts = _echarts.render($dom, extens($opt, options));

    /**
     * 动态排名
     */
    let index = 0;
    let timer = 0;

    const run = () => {
        if (index === Object.keys(dates).length) clearInterval(timer);

        const keys: any = Object.keys(dates);

        const date = keys[index++];

        dates[date].forEach((x: number, i: number) => {
            series[i] = series[i] + x;
        });

        ecahrts.setOption({
            title: {
                text: date,
            },
            series: [
                {
                    type: 'bar',
                    data: series,
                },
            ],
        });
    };

    setTimeout(() => {
        run();
    }, 0);

    timer = setInterval(() => {
        run();
    }, 1000);
};
