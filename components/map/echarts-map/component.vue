<template>
    <div ref="echarts" class="echarts" :style="{ height: props.height }" />
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import render from './render'

interface EmitsType {
    (e: 'region', value: any): void;
    (e: 'marker', value: any[]): void;
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
                const instance = await render({ $dom: echarts, $opt: props.opt, $json: props.json, $markers: props.markers, $icon: props.icon, $regions: props.regions })

                /**
                 * 地图下钻
                 */
                instance.on('click', (e) => {
                    if (e.componentType === 'geo') {
                        const find = props.json.features.find((item: any) => item.properties.name === e.name)

                        if (find.properties.adcode) {
                            emit('region', { code: String(find.properties.adcode), name: e.name })
                        }
                    }

                    if (e.componentType === 'series' && e.componentSubType === 'scatter') {
                        emit('marker', e.value)
                    }
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

<style lang="scss" scoped>
:deep(.echarts-map-tooltip) {
    width: 200px;
    height: 60px;
    background: rgba(19, 38, 109, 0.8);
    box-shadow: 0 0 16px #61c9f2 inset;
    border: 1px solid #61c9f2;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;

    .item__name {
        color: #fff;
    }

    .item__value {
        color: #fce603;
    }
}
</style>
