<template>
    <div ref="echarts" class="echarts" :style="{ width: props.width, height: props.height }" />
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import render from './render'
import { echartsFlush } from '../../../styles'

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

onMounted(() => {
    console.log('echarts.value', echarts.value)

    watch(
        () => [echartsFlush.value],
        () => {
            render({
                $dom: echarts,
                $opt: props.opt
            })
        },
        {
            deep: true,
            immediate: true
        }
    )
})
</script>
