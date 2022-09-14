<template>
  <div>
    <HeaderComponent title="TTApril" :subtitel="'comment ' + comment.id"/>
      <v-container>
        <v-list two-line color="#004D40">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>id</v-list-item-title>
              <v-list-item-subtitle>{{ comment.id }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>PostId</v-list-item-title>
              <v-list-item-subtitle>{{ comment.postId }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Name</v-list-item-title>
              <v-list-item-subtitle>{{ comment.name }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Email</v-list-item-title>
              <v-list-item-subtitle>{{ comment.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Body</v-list-item-title>
              <v-list-item-subtitle>{{ comment.body }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import HeaderComponent from "~/components/HeaderComponent.vue";
import FooterComponent from "~/components/FooterComponent.vue";
import axios from "axios";

export default {
  validate({ params }: any) {
    return /^\d+$/.test(params.id)
  },

  components: {
    HeaderComponent,
    FooterComponent
  },

  async asyncData({ params }: any) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/${params.id}`)
    let comment = response.data
    console.log(comment )
    return { comment }
  }
}
</script>
