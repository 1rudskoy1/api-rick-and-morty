import { createStore } from 'vuex'

import axiosInstance from "@/api/index";

import {CHARACTERS_BY_PAGE} from '@/api/routes.js'

export default createStore({
  state: {
    characters: {},
    pages:0
  },
  mutations: {
    setChatacters(state, {page, characters}){
        state.characters[page] = characters;
    },
    setPages(state,pages){
      state.pages = pages;
    }
  },
  actions: {
    fetchCharacters({commit}, page){
      return axiosInstance.get(CHARACTERS_BY_PAGE(page))
        .then(({data}) => {
          const {info, results} = data;
          commit('setChatacters', {page, characters: results});
          commit('setPages', info.pages);

      })
        .catch(err => console.log(err));
    }
  },
  getters: {
    getCharacterById: (state) => ({id, page}) => {
      const pageCharacters = state.characters[page];
      if (pageCharacters) {
        return pageCharacters.find(character => character.id === id);
      } return null
    },
    getCharactersByPage: (state) => (page) => {
      const pageCharacters = state.characters[page];
      return pageCharacters;
    },
  },
})
