import _echarts from '../../../utils/echarts-register';
import { extens } from '../../../core/echarts-extens';
import { useStyle } from '../../../core/echarts-style';

const convertToRem = (pxValue: number) => {
    const remValue = pxValue / 16;
    return `${remValue}rem`;
};

export default ({ $dom, $opt, $data, $seriesColor, $center, $radius }: any) => {
    const { $color, $tooltip } = useStyle();

    const title: any = {
        show: true,
        left: 'center',
        top: '35%',
        textStyle: {
            color: '#fff',
            fontSize: convertToRem(14),
        },
        subtextStyle: {
            color: '#fff',
            fontSize: convertToRem(12),
        },
    };

    const legend: any = {
        show: false,
    };

    const data = [];

    $data.forEach((x: any, i: number) => {
        data.push({
            ...x,
            label: {
                color: $seriesColor[i],
            },
        });
    });

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
                show: true,
            },
            labelLine: {
                show: true,
            },
            data: data,
        },
    ];

    /**
     * 导出配置项
     */
    const options = {
        title: title,
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
    _echarts.render($dom, extens($opt, options));
};
