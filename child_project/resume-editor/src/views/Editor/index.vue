<template>
    <div class="editor">
        <libs></libs>
        <div class="preview">
            <v-drag>
                <rag :rag="testRag"></rag>
                <!-- <rag></rag>
                <rag></rag>
                <rag></rag> -->
            </v-drag>
        </div>
    </div>
</template>

<script>
import VDrag from 'vuedraggable';
import Rag from './Rag';
import Libs from './Libs';

export default {
    components: {
        VDrag,
        Rag,
        Libs,
    },
    data() {
        return {
            testRag: {
                ragName: 'header',
                props: {},
            },
        };
    },
};
</script>

<style lang="less" scoped>
    .editor{
        display: flex;
        height: 100%;
    }
</style>
