<script lang="ts">
	import './styles.scss';
	import './reset.scss';
	import { beforeUpdate, onDestroy, onMount } from 'svelte';
	import { token } from '../stores/store';

	onMount(async () => {
		if (localStorage.getItem('token') !== null) {
			token.set(localStorage.getItem('token'));
			let val: any = null;
			token.subscribe((v: any) => (val = v));
			localStorage.removeItem('token');
			localStorage.setItem('token', val);
		}
	});
	function onBeforeUnload() {
		let val: any = null;
		token.subscribe((v: any) => (val = v));
		localStorage.removeItem('token');
		localStorage.setItem('token', val);
	}
	onMount(() => {
		if (typeof window !== 'undefined') {

			window.addEventListener('beforeunload', onBeforeUnload);

			return () => {
				window.removeEventListener('beforeunload', onBeforeUnload);
			};
		}
	});
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
</style>
