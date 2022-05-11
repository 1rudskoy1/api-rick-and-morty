<template>
  <div>Rick and morty: persons:<character-block/> </div>
</template>

<script>
// @ is an alias to /src
import CharacterBlock from '@/components/CharacterBlock.vue'

export default {
	name: "rick-and-morty-characters",
	components: {
		CharacterBlock		
	}
}
</script>
