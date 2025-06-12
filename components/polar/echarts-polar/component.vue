<template>
    <div ref="echarts" class="echarts" :style="{ height: props.height }" />
</template>

<script lang="ts" setup>
import { onMounted, ref, watch, onUnmounted } from 'vue'
import render from './render'
import { echartsFlush } from '../../../styles'
import echartsInstance from "../../../utils/echarts-register"

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
        type: Array,
        default: () => [
            { name: '衬衫', value: 5 },
            { name: '羊毛衫', value: 20 },
            { name: '雪纺衫', value: 36 },
            { name: '裤子', value: 10 },
            { name: '高跟鞋', value: 10 },
            { name: '袜子', value: 20 }
        ]
    },

    /**
     * 饼图颜色
     */
    color: {
        type: Array || null,
        default: null
    },

    /**
     * 条形宽度
     */
    barWidth: {
        type: Number,
        default: 14
    },

    /**
     * 饼图大小
     */
    radius: {
        type: Array,
        default: () => ['0%', '70%']
    },

    /**
     * 饼图位置
     */
    center: {
        type: Array,
        default: () => ['50%', '50%']
    },

    /**
     * 是否显示图例
     */
    legend: {
        type: Boolean,
        default: false
    }
})

const echarts = ref<null>(null)
let instance = null
let instanceId = ''

onMounted(() => {
    watch(
        () => [props.data, echartsFlush.value, props.color],
        async () => {
            const res = await render({
                $dom: echarts,
                $opt: props.opt,
                $data: props.data,
                $seriesColor: props.color,
                $barWidth: props.barWidth,
                $radius: props.radius,
                $center: props.center,
                $legend: props.legend,
                $instanceId: instanceId
            })

            instance = res.instance
            instanceId = res.instanceId
        },
        {
            deep: true,
            immediate: true
        }
    )
})

onUnmounted(() => {
    if (instanceId) {
        echartsInstance.destroy(instanceId)
    }
})
</script>
