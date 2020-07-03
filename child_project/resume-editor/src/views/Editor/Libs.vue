<template>
    <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
    >
    </el-menu>
</template>

<script>
import { LIBS } from '@/common/constant';
import VDrag from 'vuedraggable';

console.log(LIBS);

export default {
    components: {
        VDrag,
    },
    data() {
        return {
            libs: '',
        };
    },
    computed: {
        menuList() {
        },
    },
};
</script>

<style lang="less" scoped>

</style>
