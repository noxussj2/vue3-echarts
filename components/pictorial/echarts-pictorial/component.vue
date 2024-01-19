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
     * 数据源
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
     * 柱状图宽度
     */
    barWidth: {
        type: Number,
        default: 30
    },

    /**
     * 渐变颜色
     */
    gradientColor: {
        type: Array,
        default: () => []
    },

    /**
     * 图形
     */
    symbol: {
        type: String,
        default:
            'path://d="M34.2,89.2c-0.7-16-3.4-69.2-3.9-78.8c1.7,0,3-1.4,3-3.1c0-1.7-1.4-3.1-3.1-3.1s-3.1,1.4-3.1,3.1c0,1.7,1.4,3,3,3.1c-0.4,9.6-2.5,63.2-3.9,78.3c-1.6,16.2-4.2,53.2-22.5,95.7h54C57.7,184.5,36.7,143.2,34.2,89.2z"'
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
                $barWidth: props.barWidth,
                $gradientColor: props.gradientColor,
                $symbol: props.symbol
            })
        },
        {
            deep: true,
            immediate: true
        }
    )
})
</script>
