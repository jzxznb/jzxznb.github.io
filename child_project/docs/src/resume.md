<template>
    <div class="resume">
        <header class="resume-header">
            <div style="diaplay: flex">
                <span style="font-size: 20px;font-weight:700">姜增星</span>
                <div><span>159-6880-1813</span>|<span>674754013@qq.com</span></div>
                <div>
                    <a href="https://github.com/jzxznb" target="_blank">github地址</a> | 
                    <a href="https://jzxznb.github.io/" target="_blank">个人主页</a></div>
                <div><span>前端开发工程师</span></div>
            </div>
            <img class="adavatar" src="./assets/img/advatar.jpg" @click="open">
        </header>
        <div class="div-module">
            <div class="small-title">教育经历</div>
            <div class="content">
                <div class="content-between"><span style="font-weight:500">杭州电子科技大学</span><span>2015年9月 - 2019年7月</span></div>
                <div class="content-between"><span>软件工程 本科 计算机学院</span><span>杭州</span></div>
            </div>
        </div>
        <div class="div-module">
            <div class="small-title">工作经历</div>
            <div class="content">
                <div class="content-between"><span style="font-weight:500">小米科技有限公司</span><span>2019年7月 - 至今</span></div>
                <div class="content-between"><span>前端开发工程师 有品电商部</span><span>南京</span></div>
                <div class="content-detail">
                    <div class="small-title">1. 有品铺子(2019.8 - 2019.11)</div>
                    <div>
                        简介: 商家入驻有品后会有一个店铺首页，有品铺子主要提供一个平台来给商家进行装修店铺首页。<br>
                        a). c端增加内容模块组件，同时为b端增加相关校验内容<br>
                        b). 将c端铺子项目从preact迁移到react<br>
                        c). 为铺子导航模块增加二级页导航<br>
                        d). 为铺子b端装修页增加导航校验模块<br>
                    </div>
                </div>
                <div class="content-detail" style="padding-top: 40px">
                    <div class="small-title">2. 有品营销平台(2019.10 - 至今)</div>
                    <div>
                    简介: 营销平台之前是前后端不分离，随着业务迭代发展的不可维护，因此选择进行重构。营销平台相当于一个数据产出中心，可以创建不同的活动和计划等等来进行商品的导购<br>
                    a). 营销平台项目重构由1.0重构至2.0<br>
                    b). 业务功能的迁移和迭代<br>
                    c). 对table模块进行封装<br>
                    d). 对form表单进行封装，提升开发效率<br>
                    e). 使用工厂模式，对不同的活动类型进行分发<br>
                    </div>
                </div>
            </div>
        </div>
        <div  class="div-module">
            <div class="small-title">专业技能</div>
            <div>扎实的js基础和良好的编码风格<br>熟悉vue框架，使用过react框架<br>了解使用过ecahrts等插件<br></div>
        </div>
        <div  class="div-module">
            <div class="small-title">个人总结</div>
            <div>乐观，自学能力强，善于与人交流沟通<br>能为团队带来更多活力<br>.....</div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        open() {
            window.open('../src/assets/img/advatar.jpg')
        }
    },
};
</script>

<style scoped>
    .resume{
        font-size: 13px;
        padding: 18px 24px;
        border-radius: 3px;
        background-color: #fafafa;
        border: 2px solid #eaeefb;
    }
    .resume .resume-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }
    .resume .resume-header .adavatar{
        width: 15%;
        float: left;
    }
    .resume .div-module{
        padding-top: 10px;
    }
    .resume .div-module .small-title{
        border-bottom: 1px solid #909399;
        padding: 5px 0;
        font-size:16px;
        font-weight: 700;
    }
    .resume .div-module .content{
        padding: 5px 0;
    }
    .resume .div-module .content .content-between{
        display: flex;
        justify-content: space-between;
    }
    .resume .div-module .content .content-detail{
    }
    .resume .div-module .content .content-detail .small-title{
        font-size:14px;
        font-weight: 600;
        border-bottom: none;
    }
</style>
