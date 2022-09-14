<template>
  <v-app dark>
    <h1 class="v-size--small" v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'EmptyLayout',

  layout: 'empty',

  props: {
    error: {
      type: Object,
      default: null
    }
  },

  data: () => ({
    pageNotFound: '404 Not Found' as string,
    otherError: 'An error occurred' as string
  }),

  head () {
    const title: string = this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return { title }
  }
})
</script>

