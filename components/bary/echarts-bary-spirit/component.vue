<template>
    <div ref="echarts" class="echarts" :style="{ height: props.height }" />
</template>

<script lang="ts" setup>
import { onMounted, ref, watch, onUnmounted } from 'vue'
import render from './render'
import icon from './icon-spirit.png'
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
     * 图形
     */
    symbol: {
        type: String,
        default: 'image://' + icon
    },

    /**
     * 图形尺寸
     */
    symbolSize: {
        type: Number,
        default: 20
    }
})

const echarts = ref<null>(null)
let instance = null
let instanceId = ''

onMounted(() => {
    watch(
        () => [props.data, echartsFlush.value],
        async () => {
            const res = await render({
                $dom: echarts,
                $opt: props.opt,
                $data: props.data,
                $symbol: props.symbol,
                $symbolSize: props.symbolSize,
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
