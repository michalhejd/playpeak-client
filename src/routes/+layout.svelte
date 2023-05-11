<script lang="ts">
	import './styles.scss';
	import './reset.scss';
	import { beforeUpdate, onMount } from 'svelte';
	import { token } from "../stores/store"


	onMount(async () => {
		if(localStorage.getItem("token") !== null) {
			token.set(localStorage.getItem("token"))
			let val: any = null
			token.subscribe((v: any) => val = v)
			localStorage.removeItem("token")
			localStorage.setItem("token", val)
		}
	})

	/*window.addEventListener("unload", () => {
		let value: any = null
		token.subscribe((v: any) => value = v)
		localStorage.removeItem("token")
		localStorage.setItem("token", value)
	})*/
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
</style>
