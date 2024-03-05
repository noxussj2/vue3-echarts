# V3 Echarts

## 官方文档

[https://v3.noxussj.top/](https://v3.noxussj.top/)

## 介绍

开箱即用的图表组件库

无需关心图表实现，只需专注于数据和业务

## 特性

-   使用简单：直接引入组件，传入数据即可渲染图表，无需关心图表实现。

-   无门槛：即使不懂 Echarts 也可以做出来炫酷的图表

-   丰富图表：满足大部分图表需求，后续会持续更新

-   开源透明：源代码公开，如有需要可拷贝源代码到项目中进行二次开发

## 快速上手

### 安装

建议 [Node.js](https://nodejs.org/en) 版本 18 或以上。

```sh
npm install v3-echarts
```

```sh
yarn add v3-echarts
```

### 使用

```vue
<template>
    <echarts-barx height="300px" :data="data" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { EchartsBarx } from 'v3-echarts';

const data = ref({
    axis: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    series: [
        {
            name: '销量',
            data: [5, 20, 36, 10, 10, 20],
        },
    ],
});
</script>
```

🎉🎉🎉 到此，恭喜你，你的第一个图表已经完成啦！

## 所有组件

-   [echarts-barx](https://v3.noxussj.top/reference/barx/echarts-barx/)

-   [echarts-barx-multiple](https://v3.noxussj.top/reference/barx/echarts-barx-multiple/)

-   [echarts-barx-stack](https://v3.noxussj.top/reference/barx/echarts-barx-stack/)

-   [echarts-barx-radius](https://v3.noxussj.top/reference/barx/echarts-barx-radius/)

-   [echarts-barx-color](https://v3.noxussj.top/reference/barx/echarts-barx-color/)

-   [echarts-barx-gradient](https://v3.noxussj.top/reference/barx/echarts-barx-gradient/)

-   [echarts-barx-background](https://v3.noxussj.top/reference/barx/echarts-barx-background/)

-   [echarts-bary](https://v3.noxussj.top/reference/bary/echarts-bary/)

-   [echarts-bary-multiple](https://v3.noxussj.top/reference/bary/echarts-bary-multiple/)

-   [echarts-bary-stack](https://v3.noxussj.top/reference/bary/echarts-bary-stack/)

-   [echarts-bary-radius](https://v3.noxussj.top/reference/bary/echarts-bary-radius/)

-   [echarts-bary-color](https://v3.noxussj.top/reference/bary/echarts-bary-color/)

-   [echarts-bary-gradient](https://v3.noxussj.top/reference/bary/echarts-bary-gradient/)

-   [echarts-bary-background](https://v3.noxussj.top/reference/bary/echarts-bary-background/)

-   [echarts-bary-label](https://v3.noxussj.top/reference/bary/echarts-bary-label/)

-   [echarts-line-multiple](https://v3.noxussj.top/reference/line/echarts-line-multiple/)

-   [echarts-line-smooth](https://v3.noxussj.top/reference/line/echarts-line-smooth/)

-   [echarts-line-gradient](https://v3.noxussj.top/reference/line/echarts-line-gradient/)

-   [echarts-pictorial](https://v3.noxussj.top/reference/pictorial/echarts-pictorial/)

-   [echarts-pictorial-gradient](https://v3.noxussj.top/reference/pictorial/echarts-pictorial-gradient/)

-   [echarts-pictorial-battery](https://v3.noxussj.top/reference/pictorial/echarts-pictorial-battery/)

-   [echarts-pictorial-spirit](https://v3.noxussj.top/reference/pictorial/echarts-pictorial-spirit/)

-   [echarts-pie](https://v3.noxussj.top/reference/pie/echarts-pie/)

-   [echarts-pie-annular](https://v3.noxussj.top/reference/pie/echarts-pie-annular/)

-   [echarts-pie-legend](https://v3.noxussj.top/reference/pie/echarts-pie-legend/)

## props

当我们渲染了一个图表之后，并不是所有的图表都能够满足我们的需求，有时候我们需要对图表进行一些优化，比如修改图表的颜色、修改图表的大小等等。

### echarts-barx

| 参数            | 说明         | 类型       | 默认值  |
| --------------- | ------------ | ---------- | ------- |
| height          | 容器高度     | `string`   | `100%`  |
| data            | 数据源       | `object`   | `-`     |
| color           | 柱状图颜色   | `array`    | `-`     |
| bar-width       | 柱状图宽度   | `number`   | `15`    |
| stack           | 是否堆叠     | `boolean`  | `false` |
| radius          | 圆角         | `number`   | `0`     |
| single-color    | 是否独立颜色 | `boolean`  | `false` |
| gradient-color  | 渐变颜色     | `string[]` | `[]`    |
| show-background | 是否显示背景 | `boolean`  | `false` |

### echarts-bary

| 参数            | 说明         | 类型       | 默认值  |
| --------------- | ------------ | ---------- | ------- |
| height          | 容器高度     | `string`   | `100%`  |
| data            | 数据源       | `object`   | `-`     |
| color           | 柱状图颜色   | `array`    | `-`     |
| bar-width       | 柱状图宽度   | `number`   | `8`     |
| stack           | 是否堆叠     | `boolean`  | `false` |
| radius          | 圆角         | `number`   | `0`     |
| single-color    | 是否独立颜色 | `boolean`  | `false` |
| gradient-color  | 渐变颜色     | `string[]` | `[]`    |
| show-background | 是否显示背景 | `boolean`  | `false` |
| label           | 是否显示数值 | `boolean`  | `false` |

### echarts-line

| 参数           | 说明     | 类型       | 默认值  |
| -------------- | -------- | ---------- | ------- |
| height         | 容器高度 | `string`   | `100%`  |
| data           | 数据源   | `object`   | `-`     |
| color          | 折线颜色 | `array`    | `-`     |
| smooth         | 是否曲线 | `boolean`  | `false` |
| gradient-color | 渐变颜色 | `string[]` | `[]`    |

### echarts-pie

| 参数   | 说明         | 类型       | 默认值           |
| ------ | ------------ | ---------- | ---------------- |
| height | 容器高度     | `string`   | `100%`           |
| data   | 数据源       | `object`   | `-`              |
| color  | 饼图颜色     | `string[]` | `[]`             |
| radius | 饼图大小     | `string[]` | `['0%', '70%']`  |
| center | 饼图位置     | `string[]` | `['50%', '50%']` |
| label  | 是否显示标签 | `boolean`  | `false`          |
| legend | 是否显示图例 | `boolean`  | `false`          |

### echarts-pictorial

| 参数           | 说明       | 类型       | 默认值 |
| -------------- | ---------- | ---------- | ------ |
| height         | 容器高度   | `string`   | `100%` |
| data           | 数据源     | `object`   | `-`    |
| bar-width      | 柱状图宽度 | `number`   | `30`   |
| gradient-color | 渐变颜色   | `string[]` | `[]`   |
| symbol         | 图形       | `string`   | `-`    |

## 全局配置文件

配置文件 `echarts.config.ts` 中的属性名称都是固定好的，不可随意修改。只需要修改属性值即可。

### 引入配置文件

首先在项目根目录中创建 `echarts.config.ts` 文件，然后在 `main.ts` 中引入该文件即可。

:::code-group

```ts [main.ts]
import '../echarts.config.ts';
```

## 创建配置文件

请手动复制配置文件内容到 `echarts.config.ts` 中。

```ts
import { loadStyle } from 'v3-echarts';

const $color = {
    /**
     * 主题色-深色模式
     */
    theme: ['#B392F0', '#85E89D', '#9ECBFF', '#F97583', '#E1E4E8'],

    /**
     * 标题/副标题颜色
     */
    title: 'rgba(12, 139, 255, 1)',

    /**
     * 图例标签颜色
     */
    legendLabel: 'rgba(255, 255, 255, 1)',

    /**
     * X轴标签颜色
     */
    xAxisLabel: 'rgba(255, 255, 255, 1)',

    /**
     * Y轴标签颜色
     */
    yAxisLabel: 'rgba(255, 255, 255, 1)',

    /**
     * X轴分割线颜色
     */
    xSplitLine: 'rgba(255, 255, 255, 0.05)',

    /**
     * X轴轴线颜色
     */
    xAxisLine: 'rgba(142, 245, 254, 0.15)',

    /**
     * Y轴分割线颜色
     */
    ySplitLine: 'rgba(255, 255, 255, 0.05)',

    /**
     * Y轴轴线颜色
     */
    yAxisLine: 'rgba(142, 245, 254, 0.1)',
};

const $fontSize = {
    /**
     * 标题/副标题
     */
    title: 12,

    /**
     * x轴刻度标签
     */
    xAxisLabel: 12,

    /**
     * x轴名称
     */
    xAxisName: 12,

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
 * 容器内边距
 */
const $grid = {
    /**
     * 上
     */
    top: 50,

    /**
     * 右
     */
    right: 0,

    /**
     * 下
     */
    bottom: 15,

    /**
     * 左
     */
    left: 0,

    /**
     * grid 区域是否包含坐标轴的刻度标签
     */
    containLabel: true,
};

/**
 * 提示框风格
 */
const $tooltip = {
    /**
     * 背景色
     */
    backgroundColor: 'rgba(255, 255, 255, 1)',

    /**
     * 边框颜色
     */
    borderColor: 'rgba(255, 255, 255, 1)',

    /**
     * 边框宽度
     */
    borderWidth: 1,

    /**
     * 文字样式
     */
    textStyle: {
        color: 'rgba(48, 49, 51, 1)',
    },
};

/**
 * 图例风格
 */
const $legend = {
    /**
     * 控制图例默认是否显示
     */
    show: true,

    /**
     * 图例形状
     */
    icon: 'rect',

    /**
     * 距离容器上边界的距离
     */
    top: 10,

    /**
     * 距离容器右边界的距离
     */
    right: 10,

    /**
     * 图形宽度
     */
    itemWidth: 10,

    /**
     * 图形高度
     */
    itemHeight: 3,

    /**
     * 图例之间的间距
     */
    itemGap: 15,

    /**
     * 文字样式
     */
    textStyle: {
        color: '#fff',
        fontSize: $fontSize.legendLabel,
    },
};

/**
 * 纵向坐标轴风格
 */
const $vertical = {
    xAxis: {
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
        boundaryGap: true,
    },
    yAxis: {
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
};

/**
 * 横向坐标轴风格
 */
const $horizontal = {
    xAxis: {
        type: 'value',
        axisLabel: {
            color: $color.xAxisLabel,
            fontSize: $fontSize.xAxisLabel,
        },
        splitLine: {
            show: false,
        },
    },
    yAxis: {
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

loadStyle({
    $color,
    $grid,
    $tooltip,
    $horizontal,
    $vertical,
    $legend,
});
```
