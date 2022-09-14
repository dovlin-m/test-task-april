<template>
  <div>
    <div v-if="!loader">
      <v-flex class="d-flex flex-wrap align-baseline">
        <v-spacer/>
        <DisplayingComponentElements class="mt-4"/>
      </v-flex>
      <CardListComponent/>
    </div>
    <h4 v-else class="text-center pt-4">...loading...</h4>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DisplayingComponentElements from "~/components/DisplayingComponentElements.vue";
import CardListComponent from "~/components/CardListComponent.vue";
import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  name: "MainContent",

  components: {
    DisplayingComponentElements,
    CardListComponent
  },

  computed: {
    ...mapGetters(['loader']),
    ...mapGetters(['comments']),
    ...mapActions(['getComments'])
  },

  async mounted () {
    if (this.comments.length === 0) {
      await this.getComments
    }
  }
})
</script>
