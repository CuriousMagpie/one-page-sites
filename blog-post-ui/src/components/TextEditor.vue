<template>
  <vue-simplemde v-model="content" ref="markdownEditor" />
</template>

<script>
import VueSimplemde from 'vue-simplemde';

export default {
  components: {
    VueSimplemde,
  },
};
</script>

<style>
@import '~simplemde/dist/simplemde.min.css';
</style>
