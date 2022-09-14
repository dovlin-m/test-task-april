<template>
  <v-card class="mt-4">
    <v-container>
      <SearchComponent />
      <v-row dense>
        <v-col
          v-for="comment of paginatedComments()"
          :key="comment.id"
          :class="{'d-flex align-content-space-between col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6': displayGrid}"
          cols="12"
        >
          <v-card
            color="#004D40"
            dark
            width="100%"
            class="v-btn"
            type="button"
            @click.prevent="openComment(comment.id)"
          >
            <v-card-title>{{ comment.id }}</v-card-title>
            <v-list two-line color="#004D40">
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
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      <PaginationComponent />
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import SearchComponent from '~/components/SearchComponent.vue'
import PaginationComponent from "~/components/PaginationComponent.vue";

export default Vue.extend({
  name: 'CardListComponent',

  components: {
    PaginationComponent,
    SearchComponent
  },

  computed: {
    ...mapGetters(['comments']),
    ...mapActions(['getComments']),
    ...mapGetters(['displayGrid']),
    ...mapGetters(['search']),
    ...mapGetters(['page']),
    ...mapGetters(['size']),
  },

  methods: {
    openComment (commentId: number) {
      this.$router.push('/' + commentId)
    },

    searching (): [] {
      let search = this.search.toLowerCase();
      if (search) {
        return this.comments.filter((comment: any) => {
          return Object.keys(comment).some(key => {
            return String(comment[key]).toLowerCase().indexOf(search) > -1
          })
        })
      }
      return this.comments
    },

    paginatedComments (): any {
      const start = (this.page - 1) * this.size,
        end = start + this.size;
      return this.searching().slice(start, end);
    }
  }
})
</script>
