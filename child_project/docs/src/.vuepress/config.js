module.exports = {
    base:'/child_project/docs/src/.vuepress/dist/',
    title: 'Docs',
    themeConfig: {
        nav: [{
                text: '主页',
                link: '/'
            },
            {
                text: '百度',
                link: 'https://github.com/jzxznb'
            },
        ],
        sidebar: [
            ['/resume.md', '简历'],
        ]
    },

}