<template>
  <MainContent />
</template>

<script lang="ts">
import Vue from "vue";
import MainContent from "~/components/MainContent.vue";

export default Vue.extend({
  name: 'IndexPage',

  components: {
    MainContent
  }
})
</script>
