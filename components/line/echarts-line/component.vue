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
     * 折线颜色
     */
    color: {
        type: Array || null,
        default: null
    },

    /**
     * 是否曲线
     */
    smooth: {
        type: Boolean,
        default: false
    },

    /**
     * 是否开启区域渐变
     */
    areaGradient: {
        type: Boolean,
        default: false
    }
})

const echarts = ref<null>(null)

onMounted(() => {
    watch(
        () => props.data,
        () => {
            render({ $dom: echarts, $opt: props.opt, $data: props.data, $seriesColor: props.color, $smooth: props.smooth, $areaGradient: props.areaGradient })
        },
        {
            deep: true,
            immediate: true
        }
    )
})
</script>
