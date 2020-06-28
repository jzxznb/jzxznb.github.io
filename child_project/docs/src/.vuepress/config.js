module.exports = {
    base:'/child_project/docs/dist/',
    dest: 'dist',
    title: 'Docs',
    themeConfig: {
        nav: [{
                text: '主页',
                link: '/'
            },
            {
                text: 'github',
                link: 'https://github.com/jzxznb'
            },
        ],
        sidebar: [
            ['/resume.md', '简历'],
        ]
    },

}