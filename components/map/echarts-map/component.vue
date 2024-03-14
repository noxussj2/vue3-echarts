<template>
    <div ref="echarts" class="echarts" :style="{ height: props.height }" />
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import render from './render'

interface EmitsType {
    (e: 'click', value: String): void;
}

const emit = defineEmits<EmitsType>()

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
     * 点位数据
     */
    markers: {
        type: Array,
        default: () => []
    },

    /**
     * 地图 json
     */
    json: {
        type: Object,
        default: () => ({})
    },

    /**
     * 区域名称 icon
     */
    icon: {
        type: String,
        default: ''
    },

    /**
     * 热力图数据
     */
    regions: {
        type: Array,
        default: () => []
    }
})

const echarts = ref<null>(null)

onMounted(() => {
    watch(
        [() => props.json, () => props.markers, () => props.regions],
        async () => {
            if (props.json.type) {
                console.log('props.markers', props.markers)
                const instance = await render({ $dom: echarts, $opt: props.opt, $json: props.json, $markers: props.markers, $icon: props.icon, $regions: props.regions })

                /**
                 * 地图下钻
                 */
                instance.on('click', (e) => {
                    const find = props.json.features.find((item: any) => item.properties.name === e.name)
                    emit('click', String(find.properties.adcode))
                })
            }
        },
        {
            deep: true,
            immediate: true
        }
    )
})
</script>
