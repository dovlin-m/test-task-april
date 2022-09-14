<template>
  <v-app-bar fixed app>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-divider
      class="mx-4"
      inset
      vertical
    />
    <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'HeaderComponent',

  props: {
    title: String,
    pageTitle: String
  }
})
</script>
