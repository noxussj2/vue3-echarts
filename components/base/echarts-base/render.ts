import _echarts from '../../../utils/echarts-register'

export default async ({ $dom, $opt }: any) => {

    /**
     * 继承配置项后渲染图表
     */
    return _echarts.render($dom, $opt)
}
