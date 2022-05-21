<template>
	<div class="character-block">
		<div class="character-block__image">
			<img :src="character.image" :alt="character.name">
		</div>
		<div class="character-block__info">
			<h2 class="block-info__name" @click="datailedInfo">
				{{character.name}}
			</h2>
			<span>
				{{character.status}} - {{character.species}} 
			</span>
			<span>
				Last know location: {{character.location.name}}
			</span>	
		</div>
	</div>
</template>

<script>
	export default {
		name: 'character-block',
		props:{
			character:{
				type: Object,
				required: true
			}
		},
		methods:{
			datailedInfo(){
				console.log(this.$router.push({name: "CharacterDetails", params:{id: this.character.id}}));
				this.$router.push({name: "CharacterDetails", params:{id: this.character.id}});
			}
		}
	};
</script>