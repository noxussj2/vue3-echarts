import _echarts from '../../../utils/echarts-register';
import { extens } from '../../../core/echarts-extens';
import { useStyle } from '../../../core/echarts-style';

export default ({ $dom, $opt, $data, $seriesColor, $areaGradient, $barWidth }: any) => {
    const { $color, $grid, $tooltip, $xAxis, $yAxis, $legend } = useStyle();

    const series: any = [];

    $data.series.forEach((item: any, index: number) => {
        const data: any = [];

        item.data.forEach((x: any, i: number) => {
            data.push({
                value: x,
                itemStyle: {
                    ...($areaGradient
                        ? {
                              color: {
                                  type: 'linear',
                                  x: 0,
                                  y: 0,
                                  x2: 1,
                                  y2: 0,
                                  colorStops: [
                                      {
                                          offset: 0,
                                          color: $areaGradient[i][0],
                                      },
                                      {
                                          offset: 1,
                                          color: $areaGradient[i][1],
                                      },
                                  ],
                              },
                          }
                        : {}),
                },
            });
        });

        series.push({
            type: 'bar',
            name: item.name,
            data: data,
            barWidth: $barWidth,
            itemStyle: {
                borderRadius: 4,
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
        xAxis: {
            ...$xAxis.horizontal,
            axisLabel: {
                show: false,
            },
        },
        yAxis: [
            {
                ...$yAxis.horizontal,
                data: $data.axis,
                axisLabel: {
                    color: 'rgba(91, 225, 255, 0.6)',
                    formatter: (name: string) => {
                        const findIndex = $data.axis.findIndex((x: string) => x === name);

                        return `TOP${$data.axis.length - findIndex} ${name}`;
                    },
                },
            },
            {
                ...$yAxis.horizontal,
                data: $data.axis,
                axisLabel: {
                    color: 'rgba(255, 225, 255, 1)',
                    formatter: (name: string) => {
                        const findIndex = $data.axis.findIndex((x: string) => x === name);

                        return String($data.series[0].data[findIndex]) + ($data.series[0].unit || '');
                    },
                },
            },
        ],
        series: series,
    };

    /**
     * 继承配置项后渲染图表
     */
    _echarts.render($dom, extens($opt, options));
};
