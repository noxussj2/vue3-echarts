<template>
    <div ref="echarts" style="height: 100%"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import render from './render';

const props = defineProps({
    /**
     * 用户配置项（继承已有配置，非必要时候勿用）
     */
    opt: {
        type: Object,
        default: () => ({}),
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
                    data: [120, 200, 150, 80, 70, 110, 130],
                },
            ],
            axis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        }),
    },

    /**
     * 颜色
     */
    color: {
        type: Array || null,
        default: null,
    },

    /**
     * 渐变
     */
    areaGradient: {
        type: Array || null,
        default: null,
    },

    /**
     * 柱状图宽度
     */
    barWidth: {
        type: Number,
        default: 15,
    },
});

const echarts = ref<null>(null);

onMounted(() => {
    watch(
        () => props.data,
        () => {
            render({ $dom: echarts, $opt: props.opt, $data: props.data, $seriesColor: props.color, $areaGradient: props.areaGradient, $barWidth: props.barWidth });
        },
        {
            deep: true,
            immediate: true,
        }
    );
});
</script>
