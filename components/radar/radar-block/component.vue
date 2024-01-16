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
            indicator: [
                {
                    name: 'Sales',
                    max: 6000,
                },
                {
                    name: 'Administration',
                    max: 16000,
                },
                {
                    name: 'Techology',
                    max: 30000,
                },
                {
                    name: 'Customer Support',
                    max: 35000,
                },
                {
                    name: 'Development',
                    max: 50000,
                },
                {
                    name: 'Marketing',
                    max: 25000,
                },
            ],
            series: [
                {
                    value: [5000, 7000, 12000, 11000, 15000, 14000],
                    name: '预算分配（Allocated Budget）',
                },
            ],
        }),
    },
});

const echarts = ref<null>(null);

onMounted(() => {
    watch(
        () => props.data,
        () => {
            render({ $dom: echarts, $opt: props.opt, $data: props.data });
        },
        {
            deep: true,
            immediate: true,
        }
    );
});
</script>
