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


export default {
  name: "DisplayingComponentElements",
}
</script>
