/**
 * 遍历对象，根据传入的函数对每一项进行过滤
 * 返回新的对象，不修改原有对象（多层级对象可能会有副作用）
 */
export const objectFilter = (object, fn) => {
    const res = {};

    for (const key in object) {
        if (fn(key, object[key])) {
            res[key] = object[key];
        }
    }

    return res;
};
