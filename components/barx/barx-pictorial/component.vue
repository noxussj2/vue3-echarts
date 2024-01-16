<template>
    <div ref="echarts" style="height: 100%"></div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
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
                {
                    name: '2月',
                    data: [70, 110, 120, 200, 150, 80, 130],
                },
            ],
            axis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        }),
    },

    /**
     * 颜色
     */
    color: {
        type: Array,
        default: [],
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

setTimeout(() => {
    watch(
        () => props.data,
        () => {
            render({ $dom: echarts, $opt: props.opt, $data: props.data, $seriesColor: props.color, $barWidth: props.barWidth });
        },
        {
            deep: true,
            immediate: true,
        }
    );
}, 1000);
</script>
