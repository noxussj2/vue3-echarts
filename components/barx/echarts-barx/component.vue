<template>
    <div ref="echarts" class="echarts" :style="{ width: props.width, height: props.height }" />
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import render from './render'

interface EmitsType {
    (e: 'click', value: any): void;
}

const emit = defineEmits<EmitsType>()

const props = defineProps({

    /**
     * 用户配置项（继承已有配置，非必要时候勿用）
     */
    opt: {
        type: Object,
        default: () => ({})
    },

    /**
     * 容器宽度
     */
    width: {
        type: String,
        default: '100%'
    },

    /**
     * 容器高度
     */
    height: {
        type: String,
        default: '100%'
    },

    /**
     * 数据项
     */
    data: {
        type: Object,
        default: () => ({
            series: [
                {
                    name: '1月',
                    data: [120, 200, 150, 80, 70, 110, 130]
                }
            ],
            axis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        })
    },

    /**
     * 柱状图颜色
     */
    color: {
        type: Array || null,
        default: null
    },

    /**
     * 柱状图宽度
     */
    barWidth: {
        type: Number,
        default: 15
    },

    /**
     * 是否堆叠
     */
    stack: {
        type: Boolean,
        default: false
    },

    /**
     * 圆角
     */
    radius: {
        type: Number,
        default: 0
    },

    /**
     * 是否独立颜色
     */
    singleColor: {
        type: Boolean,
        default: false
    },

    /**
     * 是否显示背景
     */
    showBackground: {
        type: Boolean,
        default: false
    },

    /**
     * 是否显示可视区域
     */
    dataZoom: {
        type: Boolean,
        default: false
    },

    /**
     * 可视区域显示数量
     */
    dataZoomNumber: {
        type: Number,
        default: 4
    },

    /**
     * 可视区域工具颜色
     */
    dataZoomColor: {
        type: Boolean,
        default: null
    },

    /**
     * 是否启用数据轮播
     */
    carousel: {
        type: Boolean,
        default: false
    },

    /**
     * 数据轮播间隔时间
     */
    interval: {
        type: Number,
        default: 5
    },

    /**
     * 是否为曲线（需要 series.type 为 'line' 时生效）
     */
    smooth: {
        type: Boolean,
        default: false
    },

    /**
     * 是否开启区域渐变（需要 series.type 为 'line' 时生效）
     */
    areaGradient: {
        type: Boolean,
        default: false
    },

    /**
     * 图形（需要 series.type 为 'pictorial' 时生效）
     */
    symbol: {
        type: String,
        default:
            'path://d="M34.2,89.2c-0.7-16-3.4-69.2-3.9-78.8c1.7,0,3-1.4,3-3.1c0-1.7-1.4-3.1-3.1-3.1s-3.1,1.4-3.1,3.1c0,1.7,1.4,3,3,3.1c-0.4,9.6-2.5,63.2-3.9,78.3c-1.6,16.2-4.2,53.2-22.5,95.7h54C57.7,184.5,36.7,143.2,34.2,89.2z"'
    }
})

const echarts = ref<null>(null)
let timer = 0

onMounted(() => {
    watch(
        () => props.data,
        async () => {
            console.log(666)

            const instance: any = await render({
                $dom: echarts,
                $opt: props.opt,
                $data: props.data,
                $seriesColor: props.color,
                $barWidth: props.barWidth,
                $stack: props.stack,
                $radius: props.radius,
                $singleColor: props.singleColor,
                $showBackground: props.showBackground,
                $dataZoom: props.dataZoom,
                $dataZoomNumber: props.dataZoomNumber,
                $dataZoomColor: props.dataZoomColor,
                $carousel: props.carousel,
                $smooth: props.smooth,
                $areaGradient: props.areaGradient,
                $symbol: props.symbol
            })

            /**
             * 数据轮播
             */
            clearTimeout(timer)
            if (props.carousel) {
                let startValue = 0
                let endValue = props.dataZoomNumber - 1

                timer = setInterval(() => {
                    startValue += 1
                    endValue += 1
                    if (endValue > props.data.axis.length - 1) {
                        startValue = 0
                        endValue = props.dataZoomNumber - 1
                    }

                    instance.dispatchAction({
                        type: 'dataZoom',

                        // 开始位置的数值
                        startValue,

                        // 结束位置的数值
                        endValue
                    })
                }, props.interval * 1000)
            }

            /**
             * 点击事件
             */
            instance.off('click')
            instance.on('click', (e: any) => {
                emit('click', e)
            })
        },
        {
            deep: true,
            immediate: true
        }
    )
})
</script>
