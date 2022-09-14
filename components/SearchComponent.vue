<template>
  <v-text-field
    class="pb-4"
    v-model="search"
    append-icon="mdi-magnify"
    label="Search"
    single-line
    hide-details
  />
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "SearchComponent",

  computed: {
    search: {
      get () {
        return this.$store.state.search
      },
      set (value) {
        this.$store.commit('CHANGE_SEARCH', value)
      }
    }
  }
})
</script>
