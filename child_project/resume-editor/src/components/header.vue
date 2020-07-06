<template>
    <div>
        <div>
            <form-j v-model="mode" :form-data="formData"></form-j>
        </div>
    </div>
</template>

<script>
import { FormJ } from 'form-j';
import mixins from './mixins';

export default {
    name: 'component-header',
    mixins: [mixins],
    computed: {
        formData() {
            return [{
                title: '123',
                ragName: 'plugin-input',
            }];
        },
    },
    components: {
        FormJ,
    },
};
</script>

<style lang="less" scoped>

</style>
