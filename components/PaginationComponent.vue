<template>
  <div class="text-center pt-4">
    <v-pagination
      v-model="page"
      :length="comments.length / size"
      :total-visible="7"
    ></v-pagination>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "PaginationComponent",

  computed: {
    ...mapGetters(['comments']),
    ...mapGetters(['size']),

    page: {
      get () {
        return this.$store.state.page
      },
      set (value) {
        this.$store.commit('CHANGE_PAGE', value)
      }
    }
  }
})
</script>
