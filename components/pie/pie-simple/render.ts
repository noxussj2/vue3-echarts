import _echarts from '../../../utils/echarts-register';
import { extens } from '../../../core/echarts-extens';
import { useStyle } from '../../../core/echarts-style';

export default async ({ $dom, $opt, $data, $seriesColor, $center, $radius }: any) => {
    const { $color, $tooltip } = useStyle();

    const legend: any = {
        show: false,
    };

    const series: any = [
        {
            name: 'Access From',
            type: 'pie',
            center: $center,
            radius: $radius,
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
            },
            label: {
                show: false,
                position: 'center',
                color: '#fff',
            },
            emphasis: {
                scale: 1.2,
            },
            labelLine: {
                show: false,
            },
            data: $data,
        },
    ];

    /**
     * 导出配置项
     */
    const options = {
        textStyle: {
            fontFamily: 'PingFang SC, Microsoft YaHei, Arial Regular',
        },
        color: $seriesColor || $color.theme,
        legend: legend,
        tooltip: Object.assign(
            {
                trigger: 'axis',
            },
            $tooltip
        ),
        series: series,
    };

    /**
     * 继承配置项后渲染图表
     */
    const instance: any = await _echarts.render($dom, extens($opt, options));

    return instance;
};
