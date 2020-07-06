<template>
    <el-menu
        class="libs-menu"
        unique-opened
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
    >
        <el-submenu v-for="submenu in libs" :key="submenu.key" :index="submenu.key">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{submenu.title}}</span>
            </template>
                <v-drag
                    class="el-menu-item-div"
                    v-bind="draggableOptions"
                    :value="submenu.kind"
                    :clone="onClone"
                >
                    <el-menu-item
                        class="draggable-item"
                        v-for="item in (submenu.kind || [])"
                        :key="item.type"
                        :index="item.type"
                        :data-rag-name="submenu.ragName"
                        :data-rag-type="item.type"
                    >
                        <img class="item-img" :src="item.url || altUrl">
                    </el-menu-item>
                </v-drag>
        </el-submenu>
    </el-menu>
</template>

<script>
import { LIBS } from '@/common/constant';
import VDrag from 'vuedraggable';

export default {
    components: {
        VDrag,
    },
    data() {
        return {
            libs: LIBS,
            draggableOptions: {
                group: { name: 'editor', pull: 'clone', put: false },
                sort: false,
                filter: '.not-draggable',
            },
            altUrl: 'https://dummyimage.com/188x240/ff80c0/fff.png&text=%E7%94%9C%E7%94%9C%E7%9A%84%E7%B2%89%E8%89%B2',
        };
    },
    computed: {
    },
    methods: {
        onClone() {
        },
    },
};
</script>

<style lang="less" scoped>
    .libs-menu{
        width: 240px;
        .el-menu-item-div{
            display: flex;
            overflow: scroll;
            padding: 20px 0;
            .draggable-item {
                padding: 0 !important;
                margin-left: 30px;
                height: auto;
                min-width: 96px;
                .item-img{
                    width: 96px;
                    border: 2px double #909399;
                    border-radius: 4px;
                }
            }
        }
    }
</style>
