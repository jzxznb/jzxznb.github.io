<template>
    <transition  name="form-list">
        <div class="form-list"  v-if="visible">
            <component :is="componentName"></component>
            <div class="transition-box">el-collapse-transition</div>
            <div class="transition-box">el-collapse-transition</div>
        </div>
    </transition>
</template>

<script>
import { mapState } from 'vuex';

const components = {};
const context = require.context('@/components', true, /\.vue$/);
// eslint-disable-next-line func-names
(function () {
    context.keys().forEach((...params) => {
        const a = context(...params);
        components[a.default.name] = a.default;
    });
}());
console.log(components);
export default {
    props: {
        visible: {
            type: Boolean,
            default: false,
        },
    },
    components,
    computed: {
        ...mapState(['selectUid', 'ragList']),
        componentName() {
            const target = this.ragList.find((i) => i.uid === this.selectUid);
            if (!target) return '';
            return `component-${target.ragName}`;
        },
    },
};
</script>

<style lang="less" scoped>
    .form-list{
        background-color: white;
        height: 100%;
    }
    .form-list-enter-active,
    .form-list-leave-active {
        transition:  all linear .3s;
    }
    .form-list-enter,
    .form-list-leave-to {
        // opacity: 0;
        transform: translate(100%, 0);
    }
</style>
