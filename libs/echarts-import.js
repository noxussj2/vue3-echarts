import _ from 'lodash-es';

/**
 * 动态导入组件
 */
const modules = import.meta.glob('../echarts/**/*.js');

const keys = Object.keys(modules).map((item) => _.camelCase(item.replace(/(.+)(\/)(.+)(\/)(.+)(\/)(.+)(.js)/g, '$7')));

const values = Object.values(modules);

const components = {};

keys.map((key, index) => {
    components[key] = values[index];
});

export default components;
