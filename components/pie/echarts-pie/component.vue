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
     * 颜色
     */
    color: {
        type: Array || null,
        default: null
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
     * 是否显示标签
     */
    label: {
        type: Boolean,
        default: false
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

onMounted(() => {
    watch(
        () => props.data,
        () => {
            render({ $dom: echarts, $opt: props.opt, $data: props.data, $seriesColor: props.color, $radius: props.radius, $label: props.label, $center: props.center, $legend: props.legend })
        },
        {
            deep: true,
            immediate: true
        }
    )
})
</script>