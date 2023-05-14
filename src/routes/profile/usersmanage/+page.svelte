<script lang="ts">
	import { req } from '../../../plugins/axios';
	import UsersTable from '../../../components/usersTable.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let users = data.users.users;

	let searchValue = '';

	function search(){
		console.log("fetching users")
		console.log(searchValue)
		req.get('/users', {
			params: {
				whispering: searchValue
			},
			headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('token')
			}
		}, ).then(res => {
			users = res.data.data.users;
		})
	}
</script>

<div class="usersManage">
	<div class="r1">
		<div class="search">
			<label for="search">
				<span class="material-symbols-outlined"> search </span>
			</label>
			<input type="text" id="search" placeholder="Search" bind:value={searchValue} on:input={search}/>
		</div>
		<div class="addUser" />
	</div>
	<UsersTable {users} />
</div>

<style lang="scss">
	.r1 {
		display: flex;

		.search {
			width: 300px;
			padding-left: 10px;
			border-radius: 5px;
			background-color: #161616;
			margin-bottom: 10px;
			display: flex;
			label {
				display: flex;
				justify-content: center;
				align-items: center;
			}
			input {
				width: calc( 100% - 20px);
				padding: 10px;
				font-size: 12px;
				background-color: transparent;
				color: #b7b7b7;
				&::placeholder {
					color: #414141;
				}
			}
		}
	}
	.material-symbols-outlined {
		font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 24;
		font-size: 16px;
		color: #414141;
	}
</style>
