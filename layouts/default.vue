<template>
  <v-app dark>
    <HeaderComponent title="TTApril" subtitle="list"/>
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
  },

  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      subtitle: 'list',
      title: 'TTApril'
    }
  }
}
</script>
