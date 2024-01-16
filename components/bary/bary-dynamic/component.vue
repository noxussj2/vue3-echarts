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
        default: () => [
            {
                date: '20230330',
                name: '51cto',
                value: 1,
            },
            {
                date: '20230330',
                name: 'csdn',
                value: 2,
            },
            {
                date: '20230330',
                name: 'helloworld',
                value: 1,
            },
            {
                date: '20230330',
                name: '掘金',
                value: 1,
            },
            {
                date: '20230330',
                name: '牛客网',
                value: 5,
            },
            {
                date: '20230330',
                name: '小红书2',
                value: 3,
            },
            {
                date: '20230330',
                name: '思否',
                value: 2,
            },
            {
                date: '20230331',
                name: '慕课网',
                value: 1,
            },
            {
                date: '20230331',
                name: '掘金',
                value: 4,
            },
            {
                date: '20230331',
                name: '牛客网',
                value: 3,
            },
            {
                date: '20230331',
                name: '小红书0',
                value: 1,
            },
            {
                date: '20230401',
                name: 'csdn',
                value: 1,
            },
            {
                date: '20230401',
                name: 'helloworld',
                value: 1,
            },
            {
                date: '20230401',
                name: '小红书2',
                value: 3,
            },
            {
                date: '20230401',
                name: '语雀',
                value: 1,
            },
            {
                date: '20230402',
                name: 'csdn',
                value: 1,
            },
            {
                date: '20230402',
                name: '牛客网',
                value: 2,
            },
            {
                date: '20230402',
                name: '小红书2',
                value: 1,
            },
            {
                date: '20230403',
                name: '阿里云',
                value: 1,
            },
            {
                date: '20230403',
                name: '腾讯云',
                value: 3,
            },
            {
                date: '20230403',
                name: '牛客网',
                value: 4,
            },
            {
                date: '20230403',
                name: '小红书1',
                value: 1,
            },
            {
                date: '20230403',
                name: '小红书2',
                value: 1,
            },
            {
                date: '20230403',
                name: '思否',
                value: 4,
            },
            {
                date: '20230404',
                name: 'csdn',
                value: 2,
            },
            {
                date: '20230404',
                name: 'helloworld',
                value: 1,
            },
            {
                date: '20230404',
                name: '慕课网',
                value: 1,
            },
            {
                date: '20230404',
                name: '牛客网',
                value: 5,
            },
            {
                date: '20230404',
                name: '小红书1',
                value: 1,
            },
            {
                date: '20230405',
                name: '掘金',
                value: 1,
            },
            {
                date: '20230405',
                name: '牛客网',
                value: 2,
            },
            {
                date: '20230406',
                name: '51cto',
                value: 2,
            },
            {
                date: '20230406',
                name: '掘金',
                value: 1,
            },
            {
                date: '20230406',
                name: '牛客网',
                value: 2,
            },
            {
                date: '20230406',
                name: '小红书1',
                value: 1,
            },
            {
                date: '20230406',
                name: '知乎',
                value: 1,
            },
            {
                date: '20230407',
                name: '掘金',
                value: 2,
            },
            {
                date: '20230407',
                name: '牛客网',
                value: 1,
            },
            {
                date: '20230407',
                name: '小红书0',
                value: 1,
            },
            {
                date: '20230407',
                name: '小红书1',
                value: 1,
            },
            {
                date: '20230408',
                name: '51cto',
                value: 1,
            },
            {
                date: '20230408',
                name: '小红书1',
                value: 2,
            },
            {
                date: '20230409',
                name: 'helloworld',
                value: 2,
            },
            {
                date: '20230409',
                name: '掘金',
                value: 3,
            },
            {
                date: '20230409',
                name: '牛客网',
                value: 1,
            },
            {
                date: '20230409',
                name: '小红书1',
                value: 1,
            },
            {
                date: '20230410',
                name: '腾讯云',
                value: 1,
            },
            {
                date: '20230410',
                name: '小红书1',
                value: 1,
            },
            {
                date: '20230410',
                name: '知乎',
                value: 1,
            },
            {
                date: '20230411',
                name: '腾讯云',
                value: 1,
            },
            {
                date: '20230411',
                name: 'csdn',
                value: 1,
            },
            {
                date: '20230411',
                name: 'helloworld',
                value: 2,
            },
            {
                date: '20230411',
                name: '掘金',
                value: 2,
            },
            {
                date: '20230411',
                name: '牛客网',
                value: 2,
            },
            {
                date: '20230411',
                name: '小红书1',
                value: 1,
            },
            {
                date: '20230412',
                name: '51cto',
                value: 1,
            },
            {
                date: '20230412',
                name: '慕课网',
                value: 1,
            },
            {
                date: '20230412',
                name: '牛客网',
                value: 2,
            },
            {
                date: '20230412',
                name: '小红书1',
                value: 2,
            },
            {
                date: '20230412',
                name: '小红书2',
                value: 2,
            },
            {
                date: '20230413',
                name: 'csdn',
                value: 2,
            },
            {
                date: '20230413',
                name: 'helloworld',
                value: 2,
            },
            {
                date: '20230413',
                name: '小红书1',
                value: 2,
            },
            {
                date: '20230413',
                name: '思否',
                value: 1,
            },
        ],
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
