<template>
	<div>
		characterblock 
		{{message}}
	</div>
</template>

<script>
	export default {
		name: 'character-block',
		data(){
			return {
				message: 'hellow world'
			}
		},
		created(){
			this.$emit("initialized");
		}
	};
</script>