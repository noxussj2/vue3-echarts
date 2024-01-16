import _echarts from '../../../utils/echarts-register';
import { extens } from '../../../core/echarts-extens';
import { useStyle } from '../../../core/echarts-style';

export default ({ $dom, $opt, $data, $seriesColor, $smooth, $areaGradient }: any) => {
    const { $color, $grid, $tooltip, $xAxis, $yAxis, $legend } = useStyle();

    const series: any = [];

    const color: any = $seriesColor || $color.theme;

    $data.series.forEach((item: any, index: number) => {
        series.push({
            type: 'line',
            name: item.name,
            data: item.data,
            smooth: $smooth,

            ...($areaGradient
                ? {
                      areaStyle: {
                          show: false,
                          color: {
                              type: 'linear',
                              x: 0,
                              y: 0,
                              x2: 0,
                              y2: 1,
                              colorStops: [
                                  {
                                      offset: 0,
                                      color: color[index],
                                  },
                                  {
                                      offset: 1,
                                      color: color[index].replace(/(\d+)(\))/g, `${0}$2`), // 必须使用 rgba 格式，否则这里会报错
                                  },
                              ],
                          },
                      },
                  }
                : {}),
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
