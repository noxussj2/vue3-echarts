/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
module.exports = {
    root: true,

    /**
     * 规则继承，顺序不可进行调整
     */
    extends: ['standard', '@vue/eslint-config-typescript', 'plugin:vue/vue3-recommended', 'plugin:vue/vue3-essential'],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {

        /**
         * vue 文件名称为多个单词，不校验
         */
        'vue/multi-word-component-names': ['error', { ignores: ['index'] }],

        /**
         * vue 代码缩进 4 个空格
         */
        'vue/html-indent': ['error', 4],

        /**
         * vue 单行属性数量
         */
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 10
            }
        ],

        /**
         * vue 单个节点不换行
         */
        'vue/singleline-html-element-content-newline': ['off'],

        /**
         * vue 组件调用命名，小写横杆
         */
        'vue/component-name-in-template-casing': [
            'error',
            'kebab-case',
            {
                registeredComponentsOnly: false,
                ignores: []
            }
        ],

        /**
         * vue 不允许使用静态 style
         */
        // 'vue/no-static-inline-styles': ['error', {
        //     allowBinding: false
        // }],

        /**
         * vue 不允许使用未定义的组件，全局组件除外
         */
        'vue/no-undef-components': [
            'error',
            {
                ignorePatterns: ['el(\\-\\w+)+', 'app(\\-\\w+)+', 'router-view']
            }
        ],

        /**
         * vue <template> <script> <style> 之间要有换行
         */
        'vue/padding-line-between-blocks': ['error', 'always'],

        /**
         * vue 多个子标签之间要有换行
         */
        'vue/padding-line-between-tags': ['error', [{ blankLine: 'always', prev: '*', next: '*' }]],

        /**
         * vue 使用宏 define 定义的变量命名必须遵循规范
         */
        'vue/require-macro-variable-name': [
            'error',
            {
                defineProps: 'props',
                defineEmits: 'emit',
                defineSlots: 'slots',
                useSlots: 'slots',
                useAttrs: 'attrs'
            }
        ],

        /**
         * 缩进空格
         */
        indent: ['error', 4],

        /**
         * 最高代码行数
         */
        'max-lines': ['error', { max: 500 }],

        /**
         * 导入排序
         */
        'sort-imports': [
            'error',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
                allowSeparatedGroups: false
            }
        ],

        /**
         * 注释间隔
         */
        'spaced-comment': ['error', 'always', { markers: ['/'] }],

        /**
         * 注释换行
         */
        'lines-around-comment': [
            'error',
            {
                beforeBlockComment: true,
                beforeLineComment: true
            }
        ],

        /**
         *
         */
        'padded-blocks': ['off'],

        /**
         * if else 换行
         */
        'brace-style': ['error', 'stroustrup']
    }
}
