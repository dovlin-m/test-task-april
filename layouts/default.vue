<template>
  <v-app dark>
    <HeaderComponent title="Test April" pageTitle="comments" />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script lang="ts">
import HeaderComponent from "~/components/HeaderComponent.vue";
import FooterComponent from "~/components/FooterComponent.vue";

export default {
  name: 'DefaultLayout',

  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>
