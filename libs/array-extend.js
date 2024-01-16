import { stringWidth } from './string-extend.js';

/**
 * 遍历数组，处理对象某一项属性
 * 返回修改后的新数组
 */
export const arrayExecItem = (array, fn, ...arg) => {
    const res = [];

    array.map((item, index) => {
        const newItem = Object.assign({}, item);
        fn(newItem, index, ...arg);

        res.push(newItem);
    });

    return res;
};

/**
 * 遍历对组，向目标数组push指定方法执行的结果
 * 没有返回值，直接修改目标数组
 */
export const arrayPush = (array, targetArray, fn) => {
    array = array.map((item, index) => {
        targetArray.push(fn(item, index));

        return item;
    });
};

/**
 * 获取数组中最长字符串的宽度
 */
export const arrayStringWidth = (array, fontSize) => {
    let max = 0;

    array.map((name) => {
        const width = stringWidth(name, fontSize);

        max = max > width ? max : width;
    });

    return max;
};
