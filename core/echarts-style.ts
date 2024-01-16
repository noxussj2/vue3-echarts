let $color = {
    /**
     * 主题色-深色模式
     */
    theme: [
        'rgba(168, 39, 255, 1)',
        'rgba(130, 39, 255, 1)',
        'rgba(90, 0, 255, 1)',
        'rgba(31, 84, 255, 1)',
        'rgba(46, 41, 255, 1)',
        'rgba(6, 0, 255, 1)',
        'rgba(11, 80, 255, 1)',
        'rgba(0, 168, 255, 1)',
        'rgba(0, 204, 255, 1)',
        'rgba(15, 241, 255, 1)',
        'rgba(0, 255, 213, 1)',
        'rgba(0, 255, 612, 1)',
    ],

    /**
     * 标题/副标题
     */
    title: 'rgba(12, 139, 255, 1)',

    /**
     * 图例标签颜色
     */
    legendLabel: 'rgba(255, 255, 255, 1)',

    /**
     * X轴分割线颜色
     */
    xSplitLine: 'rgba(255, 255, 255, 0.05)',

    /**
     * X轴轴线颜色
     */
    xAxisLine: 'rgba(142, 245, 254, 0.15)',

    /**
     * X轴标签颜色
     */
    xAxisLabel: 'rgba(255, 255, 255, 1)',

    /**
     * Y轴分割线颜色
     */
    ySplitLine: 'rgba(255, 255, 255, 0.05)',

    /**
     * Y轴轴线颜色
     */
    yAxisLine: 'rgba(142, 245, 254, 0.1)',

    /**
     * Y轴标签颜色
     */
    yAxisLabel: 'rgba(255, 255, 255, 1)',
};

let $grid = {
    /**
     * 上
     */
    top: 60,

    /**
     * 右
     */
    right: 20,

    /**
     * 下
     */
    bottom: 20,

    /**
     * 左
     */
    left: 20,

    /**
     * grid 区域是否包含坐标轴的刻度标签
     */
    containLabel: true,
};

let $fontSize = {
    /**
     * 标题/副标题
     */
    title: 12,

    /**
     * x轴刻度标签
     */
    xAxisLabel: 10,

    /**
     * x轴名称
     */
    xAxisName: 10,

    /**
     * y轴刻度标签
     */
    yAxisLabel: 12,

    /**
     * y轴名称
     */
    yAxisName: 12,

    /**
     * 图例标签
     */
    legendLabel: 12,
};

/**
 * 提示框风格
 */
let $tooltip = {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    textStyle: {
        color: 'rgba(48, 49, 51, 1)',
    },
};

/**
 * x 轴风格
 */
let $xAxis = {
    vertical: {
        type: 'category',
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: $color.xAxisLabel,
            fontSize: $fontSize.xAxisLabel,
        },
        axisLine: {
            lineStyle: {
                color: $color.xAxisLine,
            },
        },
        splitLine: {
            lineStyle: {
                color: $color.xSplitLine,
            },
        },
        boundaryGap: false,
    },
    horizontal: {
        type: 'value',
        axisLabel: {
            color: $color.xAxisLabel,
            fontSize: $fontSize.xAxisLabel,
        },
        splitLine: {
            show: false,
        },
    },
};

/**
 * y 轴风格
 */
let $yAxis = {
    vertical: {
        type: 'value',
        nameTextStyle: {
            color: $color.yAxisLabel,
            fontSize: $fontSize.yAxisName,
        },
        axisLabel: {
            color: $color.yAxisLabel,
            fontSize: $fontSize.yAxisLabel,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: $color.yAxisLine,
            },
        },
        splitLine: {
            lineStyle: {
                color: $color.ySplitLine,
            },
        },
    },
    horizontal: {
        type: 'category',
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: $color.yAxisLabel,
            fontSize: $fontSize.yAxisLabel,
        },
        axisLine: {
            show: false,
        },
    },
};

/**
 * 图例风格
 */
let $legend = {
    show: true,
    icon: 'rect',
    top: 10,
    right: 20,
    itemWidth: 10,
    itemHeight: 3,
    itemGap: 15,
    textStyle: {
        color: '#fff',
        fontSize: $fontSize.legendLabel,
    },
};

export const useStyle = () => {
    return { $color, $grid, $tooltip, $xAxis, $yAxis, $legend };
};

export const loadStyle = (style: any) => {
    $color = style.$color;
    $grid = style.$grid;
    $tooltip = style.$tooltip;
    $xAxis = style.$xAxis;
    $yAxis = style.$yAxis;
    $legend = style.$legend;
};
