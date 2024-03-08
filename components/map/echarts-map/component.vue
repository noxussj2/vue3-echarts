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
        default: () => []
    },

    /**
     * 地图 json
     */
    json: {
        type: Object,
        default: () => ({})
    }
})

const echarts = ref<null>(null)

onMounted(() => {
    watch(
        () => props.json,
        () => {
            if (props.json.type) {
                render({ $dom: echarts, $opt: props.opt, $json: props.json, $data: props.data })
            }
        },
        {
            deep: true,
            immediate: true
        }
    )
})
</script>
