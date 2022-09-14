<template>
  <div class="text-center">
    <v-pagination
      v-model="byPage"
      :length="6"
    ></v-pagination>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PaginationComponent",

  computed: {
    ...mapGetters(['byPage']),
  },
}
</script>

<style scoped>

</style>
