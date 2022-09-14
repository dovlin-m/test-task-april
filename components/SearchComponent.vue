<template>
  <v-text-field
    v-model="bySearch"
    append-icon="mdi-magnify"
    label="Search"
    single-line
    hide-details
  />
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "SearchComponent",

  computed: {
    ...mapGetters(['bySearch'])
  }
}
</script>

<style scoped>

</style>
