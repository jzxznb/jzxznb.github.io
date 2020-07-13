<template>
    <div class="editor">
        <libs></libs>
        <div class="preview">
            <v-drag
                class="editor-drag"
                @add="onAdd"
                v-model="rags"
                v-bind="draggableOptions"
            >
                <rag
                    :class="{'no-bottom': index === rags.length - 1}"
                    v-for="(rag,index) in rags"
                    :key="index"
                    :rag="rag"
                    :form-list-visible.sync="formListVisible"
                ></rag>
            </v-drag>
        </div>
        <div style="width: 300px;overflow: auto;" class="form-list">
            <form-list :visible.sync="formListVisible"></form-list>
        </div>
    </div>
</template>

<script>
import VDrag from 'vuedraggable';
import { mapState, mapActions } from 'vuex';
import { LIBS as libs } from '../../common/constant';
import Rag from './Rag';
import Libs from './Libs';
import FormList from './FormList';

export default {
    components: {
        VDrag,
        Rag,
        Libs,
        FormList,
    },
    data() {
        return {
            testRag: {
                ragName: 'header',
                props: {},
            },
            draggableOptions: {
                group: { name: 'editor' },
                animation: 150,
            },
            formListVisible: false,
        };
    },
    computed: {
        ...mapState(['ragList']),
        maxUid() {
            const uidList = (this.ragList || []).map((i) => Number(i.uid));
            return Math.max.apply(null, Array.from(new Set([0, ...uidList])));
        },
        rags: {
            set(value) {
                this.updateRagList(value);
            },
            get() {
                return this.ragList;
            },
        },
    },
    methods: {
        ...mapActions(['updateRagList']),
        onAdd(e) {
            const { newIndex, item } = e;
            const front = this.rags.slice(0, newIndex);
            const later = this.rags.slice(newIndex);
            const { ragName, ragType } = item.dataset;
            const newUid = this.maxUid + 1;
            const target = this.getConfig(ragName, ragType);
            if (!target) return;
            const { props = {} } = target;
            const newComponent = {
                ragName,
                ragType,
                props,
                uid: newUid,
            };
            this.rags = [...front, newComponent, ...later];
        },
        getConfig(ragName, ragType) {
            return libs.find((item) => `${ragName}` === `${item.ragName}`);
        },
    },
};
</script>

<style lang="less" scoped>
    .editor{
        display: flex;
        position: relative;
        height: 100%;
        .preview{
            flex: 1;
            height: 100%;
            display: flex;
            overflow: auto;
            justify-content: center;
            .editor-drag{
                background-color: #d6d6d6;
                min-width: 700px;
                height: 100%;
                .draggable-item {
                    padding: 0 !important;
                    margin-left: 30px;
                    height: auto;
                    min-width: 96px;
                    .item-img{
                        width: 96px !important;
                    }
                }
                .rag-item-tob{
                    margin-bottom: 10px;
                }
                .no-bottom{
                    margin-bottom: 0;
                }
            }
        }
    }
</style>

<style lang="less">
    .editor-drag{
        .draggable-item {
            height: auto;
            display: flex;
            justify-content: center;
            background-color: rgba(255, 251, 0, 0.3) !important;
            min-width: 96px;
            .item-img{
                width: 96px !important;
            }
        }
    }
</style>
