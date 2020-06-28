<template>
    <div class="resume">
        <header class="resume-header">
            <span style="font-size: 20px;font-weight:700">姜增星</span>
            <div><span>159-6880-1813</span>|<span>674754013@qq.com</span></div>
            <div><span>前端开发工程师</span></div>
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
            </div>
        </div>
    </div>
</template>

<script>
export default {};
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
        justify-content: center;
        align-items: center;
        flex-direction: column;
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
</style>
