import { GetterTree, ActionTree, MutationTree } from 'vuex'
import axios from "axios";

export const state = () => ({
  comments: [] as [],
  comment: [] as [],
  displayGrid: true as boolean,
  page: 1 as number,
  size: 10 as number,
  search: '' as string,
  loader: true as boolean
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  comments: state => state.comments,
  comment: state => state.comment,
  displayGrid: state => state.displayGrid,
  page: state => state.page,
  size: state => state.size,
  search: state => state.search,
  loader: state => state.loader
}

export const mutations: MutationTree<RootState> = {
  CHANGE_COMMENTS: (state, comments: []) => (state.comments = comments),
  CHANGE_COMMENT: (state, comment: []) => (state.comment = comment),
  CHANGE_SEARCH: (state, search: string) => (state.search = search),
  CHANGE_DISPLAY: (state, value: boolean) => (state.displayGrid = value),
  CHANGE_LOADER: (state, value: boolean) => (state.loader = value),
  CHANGE_PAGE: (state, value: number) => (state.page = value)
}

export const actions: ActionTree<RootState, RootState> = {
  async getComments({ commit }) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments`)
    const comments = await response.data
    commit('CHANGE_COMMENTS', comments)
    commit('CHANGE_LOADER', false)
  },

  async getComment({ commit }, id: number) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/${ id }`)
    const comment = await response.data
    console.log(comment)
    commit('CHANGE_COMMENT', comment)
  }
}
