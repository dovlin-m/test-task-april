<template>
  <v-card class="mt-4">
    <v-container>
        {{ count }}
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: 'CardListComponent',

  data: () => ({
  }),

  computed: {
    ...mapState(['count'])
  }
})
</script>
