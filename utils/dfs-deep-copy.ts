/**
 * 类型字典
 */
export const type = (data: string) => {
    const dist: any = {
        '[object Array]': 'array',
        '[object Object]': 'object',
        '[object Number]': 'number',
        '[object Function]': 'function',
        '[object String]': 'string',
        '[object Null]': 'null',
        '[object Undefined]': 'undefined',
    };

    const res = Object.prototype.toString.call(data);

    return dist[res];
};
