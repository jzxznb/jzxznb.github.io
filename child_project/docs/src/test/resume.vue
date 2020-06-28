<template>
    <div class="resume">
        <header class="resume-header">
            <span>姜增星</span>
            <div><span>159-6880-1813</span>|<span>674754013@qq.com</span></div>
            <div><span>前端开发工程师</span></div>
        </header>
        <div class="div-module">
            <div class="small-title">教育经历</div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
    .resume{
        padding: 18px 24px;
        border-radius: 3px;
        background-color: #fafafa;
        border: 1px solid #eaeefb;
    }
    .resume .resume-header{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 12px;
        flex-direction: column;
    }
    .resume .div-module{
        justify-content: space-between;
    }
    .resume .div-module .small-title{
        border-bottom: 1px solid black;
    }
    /* .resume .div-module{

    } */
</style>
