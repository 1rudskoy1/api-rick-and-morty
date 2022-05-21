<template>
  <div class="character-main"> <character-block v-if="character" :character="character"/>
    <button class="btn btn-back" @click = "goBack">Go back</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import CharacterBlock from '@/components/CharacterBlock.vue'
import CharacterBlock from "@/components/CharacterBlock.vue"
export default {
	name: "rick-and-morty-characters",
  components:{
	CharacterBlock
  },
  data(){   return{ character: null,     }},
  async created(){
try{
        const {id} = this.$route.params;
        if (id){
         const {data}= await this.$store.dispatch('fetchSingleCharacter', id)
          this.character = data;
        }
    }catch(err){
        console.log(err);
      }
  },
  methods:{
    goBack(){
      this.$router.push({name: 'RickAndMortyList'});
    }
  },
}
</script>
