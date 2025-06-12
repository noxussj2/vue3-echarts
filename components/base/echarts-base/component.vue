<template>
    <div ref="echarts" class="echarts" :style="{ width: props.width, height: props.height }" />
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
     * 容器宽度
     */
    width: {
        type: String,
        default: '100%'
    },

    /**
     * 容器高度
     */
    height: {
        type: String,
        default: '100%'
    }
})

const echarts = ref<null>(null)
let instance = null
let instanceId = ''

onMounted(() => {
    console.log('echarts.value', echarts.value)

    watch(
        () => [echartsFlush.value],
        async () => {
            const res = await render({
                $dom: echarts,
                $opt: props.opt,
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
