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
     * 颜色
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
        default: 10
    },

    /**
     * 是否独立颜色
     */
    singleColor: {
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
                $singleColor: props.singleColor
            })
        },
        {
            deep: true,
            immediate: true
        }
    )
})
</script>
