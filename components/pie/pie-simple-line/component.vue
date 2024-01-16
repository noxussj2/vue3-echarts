<template>
    <div class="echarts-next__pie-simple">
        <div ref="echarts" style="height: 100%"></div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import render from './render';

import { PropType } from 'vue';

interface Data {
    name: string;
    value: number;
    unit: string;
}

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
        type: Array as PropType<Data[]>,
        default: () => [
            { value: 1048, name: 'Search Engine', unit: '次' },
            { value: 735, name: 'Direct', unit: '次' },
            { value: 580, name: 'Email', unit: '次' },
            { value: 484, name: 'Union Ads', unit: '次' },
            { value: 300, name: 'Video Ads', unit: '次' },
        ],
    },

    /**
     * 颜色
     */
    color: {
        type: Array as PropType<string[]>,
        default: () => [
            'rgba(168, 39, 255, 1)',
            'rgba(130, 39, 255, 1)',
            'rgba(90, 0, 255, 1)',
            'rgba(31, 84, 255, 1)',
            'rgba(46, 41, 255, 1)',
            'rgba(6, 0, 255, 1)',
            'rgba(11, 80, 255, 1)',
            'rgba(0, 168, 255, 1)',
            'rgba(0, 204, 255, 1)',
            'rgba(15, 241, 255, 1)',
            'rgba(0, 255, 213, 1)',
            'rgba(0, 255, 612, 1)',
        ],
    },

    /**
     * 位置
     */
    center: {
        type: Array,
        default: () => ['50%', '50%'],
    },

    /**
     * 大小
     */
    radius: {
        type: Array,
        default: () => [60, 90],
    },

    /**
     * 显示图例
     */
    legend: {
        type: Boolean,
        default: true,
    },
});

const count = ref(0);

const echarts = ref<null>(null);

setTimeout(() => {
    watch(
        () => props.data,
        async () => {
            if (props.data.length) {
                const obj: any = props.data.reduce((a: any, b: any) => ({ value: Number(a.value) + Number(b.value) }), { value: 0 });
                count.value = obj.value;
                render({ $dom: echarts, $opt: props.opt, $data: props.data, $seriesColor: props.color, $center: props.center, $radius: props.radius });
            }
        },
        {
            deep: true,
            immediate: true,
        }
    );
}, 0);
</script>

<style lang="scss">
@import './index.scss';
</style>
