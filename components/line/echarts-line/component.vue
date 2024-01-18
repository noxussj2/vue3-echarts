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
     * 高度
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
     * 颜色
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
     * 渐变颜色
     */
    gradientColor: {
        type: Array,
        default: () => []
    }
})

const echarts = ref<null>(null)

onMounted(() => {
    watch(
        () => props.data,
        () => {
            render({ $dom: echarts, $opt: props.opt, $data: props.data, $seriesColor: props.color, $smooth: props.smooth, $gradientColor: props.gradientColor })
        },
        {
            deep: true,
            immediate: true
        }
    )
})
</script>
