<template>
    <div class="echarts-pie-hover">
        <div ref="echarts" class="echarts" :style="{ height: props.height }" />

        <main v-if="props.data.length" :style="{ left: props.center[0] }">
            <span class="main__name">{{ props.data[active].name }}</span>

            <span class="main__value">{{ props.data[active].value }}</span>

            <span class="main__unit">{{ props.data[active].unit }}</span>
        </main>
    </div>
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
        default: () => [
            { name: '衬衫', value: 5 },
            { name: '羊毛衫', value: 20 },
            { name: '雪纺衫', value: 36 },
            { name: '裤子', value: 10 },
            { name: '高跟鞋', value: 10 },
            { name: '袜子', value: 20 }
        ]
    },

    /**
     * 饼图颜色
     */
    color: {
        type: Array || null,
        default: null
    },

    /**
     * 饼图大小
     */
    radius: {
        type: Array,
        default: () => ['0%', '70%']
    },

    /**
     * 饼图位置
     */
    center: {
        type: Array,
        default: () => ['50%', '50%']
    },

    /**
     * 是否显示标签
     */
    label: {
        type: Boolean,
        default: false
    },

    /**
     * 是否显示图例
     */
    legend: {
        type: Boolean,
        default: false
    }
})

const echarts = ref<null>(null)

/**
 * 高亮事件
 */
const active = ref(0)

let timer = 0

onMounted(() => {
    watch(
        () => props.data,
        async () => {
            const instance: any = await render({
                $dom: echarts,
                $opt: props.opt,
                $data: props.data,
                $seriesColor: props.color,
                $radius: props.radius,
                $label: props.label,
                $center: props.center,
                $legend: props.legend
            })

            instance.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: 0
            })

            const fn = () => {
                active.value++

                if (active.value >= props.data.length) {
                    active.value = 0
                }

                instance.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: active.value
                })

                instance.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                    dataIndex: active.value === 0 ? props.data.length - 1 : active.value - 1
                })
            }

            active.value = 0
            clearInterval(timer)
            timer = setInterval(fn, 5000)

            instance.on('mouseover', (e: any) => {
                clearInterval(timer)

                active.value = e.dataIndex
            })

            instance.on('mouseout', () => {
                timer = setInterval(fn, 5000)
            })
        },
        {
            deep: true,
            immediate: true
        }
    )
})
</script>

<style lang="scss">
@import './index.scss';
</style>
