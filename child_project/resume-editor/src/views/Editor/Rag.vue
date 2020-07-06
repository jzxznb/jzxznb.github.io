<template>
    <div
        class="rag-item-tob"
        @click="select"
    >
        <div ref="rag-component" class="renderer"></div>
        <div class="mask" :class="{'selected': isSelect}"/>
        <div class="toolList" v-if="isSelect">
            <el-button
                class="tool-button"
                v-for="tool in toolList"
                @click="toolClick($event, tool)"
                :key="tool.key"
            >
                <i :class="tool.icon"></i>
            </el-button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { renderComponents } from '../../common/utils';

export default {
    props: {
        rag: { type: Object },
        formListVisible: { type: Boolean },
    },
    mounted() {
        renderComponents(this.rag, this.$refs['rag-component']);
    },
    computed: {
        ...mapState(['selectUid', 'ragList']),
        isSelect() {
            return this.selectUid === this?.rag?.uid;
        },
        toolList() {
            return [
                {
                    key: 'delete',
                    label: '删除',
                    icon: 'el-icon-delete-solid',
                    click() {
                        const index = this.ragList.findIndex((i) => i.uid === this.rag.uid);
                        const front = this.ragList.slice(0, index);
                        const later = this.ragList.slice(index + 1);
                        this.updateRagList([front, later].flat());
                        this.setSelectUid(0);
                    },
                },
                {
                    key: 'setting',
                    label: '设置',
                    icon: 'el-icon-s-tools',
                    click() {
                        const res = !this.formListVisible;
                        this.$emit('update:formListVisible', res);
                    },
                },
            ];
        },
    },
    methods: {
        ...mapActions(['setSelectUid', 'updateRagList']),
        select(e) {
            const { uid } = this.rag || {};
            try {
                this.setSelectUid(uid);
            } catch (err) {
                console.log('setSelectUid', err);
            }
        },
        toolClick(e, tool) {
            if (tool.click) {
                (tool.click.bind(this))();
                e.stopPropagation();
            }
        },
    },
};
</script>

<style lang="less" scoped>
    .rag-item-tob{
        background-color: white;
        position: relative;
        .mask {
            position: absolute;
            left: 0px;
            top: 0px;
            right: 0px;
            bottom: 0px;
            z-index: 2;
        }
        .toolList{
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 1px;
            right: -30px;
            .tool-button{
                margin: 0;
                padding: 8px;
                border: 0;
                border-radius: 0;
            }

        }
        .selected {
            border: 2px solid #4497e3;
        }
    }
</style>
