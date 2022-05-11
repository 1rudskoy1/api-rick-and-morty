<template>
  <div class="home">Rick and morty {{characters}} <character-block /></div>
</template>

<script>


import CharacterBlock from '@/components/CharacterBlock.vue'

export default {
	name: "rick-and-morty-list",
	components:{
		CharacterBlock
	},
	created(){
		this.$store.dispatch('fetchCharacters', 1);
	},
	computed: {
		characters(){
			return this.$store.state.characters;
		}
	}

}
</script>
