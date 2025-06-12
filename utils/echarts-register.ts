import * as echarts from 'echarts'
import { v4 as uuidv4 } from 'uuid'

class Echarts {
    loaded: object

    constructor() {
        this.loaded = {}

        setInterval(() => {
            console.log('this.loaded', this.loaded)
        }, 1000 * 5)
    }

    /**
     * 渲染图表
     */
    async render(dom: any, opt: any, instanceId: string) {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (instanceId) {
                    this.loaded[instanceId].clear()

                    this.loaded[instanceId].setOption(opt)

                    resolve({ instance: this.loaded[instanceId], instanceId })
                }

                if (!instanceId) {
                    const uuid = uuidv4()

                    const instance = echarts.init(dom.value)

                    instance.setOption(opt)

                    this.loaded[uuid] = instance

                    resolve({ instance, instanceId: uuid })
                }
            }, 0)
        })
    }

    /**
     * 图表重载
     */
    resize() {
        for (const key in this.loaded) {
            this.loaded[key].resize()
        }
    }

    /**
     * 销毁图表
     */
    destroy(instanceId: string) {
        this.loaded[instanceId].dispose()
        delete this.loaded[instanceId]
    }
}

const _echarts = new Echarts()

export default _echarts
