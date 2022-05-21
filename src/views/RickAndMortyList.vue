<template>
  <div class="home">
    <h1 class="header"> Rick and morty</h1><div class="characters-list"><character-block v-for="character in characters" :key="character.id" :character = "character"/>
  </div>
    <div class="btns">
      <div class="btn" @click="handlerChange('1')">Previous</div>
      <div class="btn" @click="handlerChange('2')">Next</div>
    </div>
  </div>
</template>

<script>


import CharacterBlock from '@/components/CharacterBlock.vue'
// import Paginate from "vuejs-paginate"


export default {
	name: "rick-and-morty-list",
	components:{
		CharacterBlock,
		// Paginate
	},
	data(){
		return{
			currentPage: 1,
		}
	},
	created(){
		this.$store.dispatch('fetchCharacters', this.currentPage);
	},
	computed: {
		characters()
        {
          // console.log(this.$store.getters["getCharactersByPage"](this.currentPage));
			return this.$store.getters["getCharactersByPage"](this.currentPage);
		},
		firstCharacter(){
			return this.$store.getters['getCharacterById']({id: 1, page: 1});
		},
		pages(){
			return this.$store.state.pages;
		},
      watch: { CurrentPage: { handler(page){
        console.lod("21");
            this.$store.dispatch('fetchCharacters', page);
          },
          immediate: true
        }
      }
	},
  methods:{handlerChange(page){
      if (page == 2){
        this.currentPage++;
      }
      if (page == 1){
        this.currentPage--;
      }
      this.$store.dispatch('fetchCharacters', this.currentPage);
      // console.log(this.currentPage);
    },
  }

}
</script>
