<template>
    <div ref="echarts" class="echarts" :style="{ height: props.height }" />
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import render from './render'

const props = defineProps({

    /**
     * 用户配置项（继承已有配置，非必要时候勿用）
     */
    opt: {
        type: Object,
        default: () => ({})
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
     * 渐变颜色
     */
    gradientColor: {
        type: Array,
        default: () => []
    },

    /**
     * 是否显示背景
     */
    showBackground: {
        type: Boolean,
        default: false
    },

    /**
     * 调试
     */
    debugger: {
        type: Boolean,
        default: false
    }
})

const echarts = ref<null>(null)

onMounted(() => {
    watch(
        () => props.data,
        () => {
            render({
                $dom: echarts,
                $opt: props.opt,
                $data: props.data,
                $seriesColor: props.color,
                $barWidth: props.barWidth,
                $stack: props.stack,
                $radius: props.radius,
                $singleColor: props.singleColor,
                $gradientColor: props.gradientColor,
                $showBackground: props.showBackground,
                $debugger: props.debugger
            })
        },
        {
            deep: true,
            immediate: true
        }
    )
})
</script>
