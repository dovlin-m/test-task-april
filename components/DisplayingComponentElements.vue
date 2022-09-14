<template>
  <div>
    <v-btn @click="switchDisplay(true)">
      <v-icon>mdi-grid-large</v-icon>
    </v-btn>
    <v-btn @click="switchDisplay(false)">
      <v-icon>mdi-format-list-bulleted</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapMutations } from "vuex";

export default Vue.extend({
  name: "DisplayingComponentElements",

  computed: {
    ...mapGetters(['displayGrid'])
  },

  methods: {
    ...mapMutations(['CHANGE_DISPLAY']),

    switchDisplay (value: boolean) {
      this.CHANGE_DISPLAY(value)
    }
  }
})
</script>
