<template>
    <div>
        <div ref="rag-component" class="renderer"></div>
        <div class="mask" />
    </div>
</template>

<script>
import { renderComponents } from '../../common/utils';

export default {
    props: {
        rag: { type: Object },
    },
    mounted() {
        renderComponents(this.rag, this.$refs['rag-component']);
    },
};
</script>

<style lang="less" scoped>

</style>
