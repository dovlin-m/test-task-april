<template>
  <v-app-bar
    fixed
    app
  >
    <v-toolbar-title title="title" />
    <v-divider
      class="mx-4"
      inset
      vertical
    />
    <v-toolbar-title subtitle="subtitle" />
  </v-app-bar>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>
