import * as echarts from 'echarts';

class Echarts {
    loaded: any[];

    constructor() {
        this.loaded = [];

        // setInterval(() => {
        //     console.log('this.loaded', this.loaded);
        // }, 1000 * 5);
    }

    /**
     * 渲染图表
     */
    async render(dom: any, opt: any) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const instance = echarts.init(dom.value);

                instance.clear();

                instance.setOption(opt);

                this.loaded.push(instance);

                resolve(instance);
            }, 0);
        });
    }

    /**
     * 图表重载
     */
    resize() {
        this.loaded.forEach((instance: any) => {
            instance.resize();
        });
    }

    /**
     * 销毁图表
     */
    destroy() {
        while (this.loaded.length) {
            const instance = this.loaded.pop();

            setTimeout(() => {
                instance.dispose();
            }, 0);
        }
    }
}

const _echarts = new Echarts();

export default _echarts;
