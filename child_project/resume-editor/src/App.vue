<template>
  <div id="app">
      <editor/>
  </div>
</template>

<script>
import Editor from './views/Editor';

export default {
    name: 'App',
    components: {
        Editor,
    },
};
</script>

<style lang="less">
    .app{
        display: flex;
    }
    .form-component-item{
        margin: 0 !important;
    }
</style>
