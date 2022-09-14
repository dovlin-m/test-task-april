<template>
  <div>
    <v-flex class="d-flex flex-wrap align-baseline">
      <v-spacer/>
      <DisplayingComponentElements class="mt-4"/>
    </v-flex>
    <CardListComponent/>
  </div>
</template>

<script>
import SearchComponent from "./SearchComponent";
import DisplayingComponentElements from "./DisplayingComponentElements";
import CardListComponent from "./CardListComponent";

export default {
  name: "MainContent",

  components: {
    SearchComponent,
    DisplayingComponentElements,
    CardListComponent
  }
}
</script>

<style scoped>

</style>
