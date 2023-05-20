<script lang="ts">
	import { req } from '../../../plugins/axios';
	import { goto } from '$app/navigation';
	import UsersTable from '../../../components/usersTable.svelte';
	import type { PageData } from './$types';
	import { usersManageProfile } from '../../../stores/store';

	export let data: PageData;
	let users = data.users.users;

	let searchValue = '';

	function search() {
		console.log('fetching users');
		console.log(searchValue);
		req
			.get('/users', {
				params: {
					whispering: searchValue
				},
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token')
				}
			})
			.then((res) => {
				users = res.data.data.users;
			}).catch((error) => {
				if (error.response.data.meta.error === "token_unauthorized" || error.response.data.meta.error === "unauthorized") {
            localStorage.removeItem('token');
            return goto('/');
        }
			});
	}

	let user: any = null

	usersManageProfile.subscribe((v:any) => {
		user = v
	});

</script>

<div class="usersManage">
	<div class="r1">
		<div class="search">
			<label for="search">
				<span class="material-symbols-outlined"> search </span>
			</label>
			<input
				type="text"
				id="search"
				placeholder="Search"
				bind:value={searchValue}
				on:input={search}
			/>
		</div>
		<div class="addUser" />
	</div>
	<div class="r2">
		<UsersTable {users} />
	{#if user}
		<div class="userProfile">
			<div class="userProfileHeader">
				<p>{user._id}</p>
				<p>{user.email}</p>
				<p>{user.name}</p>
				<p>{user.nickname}</p>
				<p>{user.role}</p>
				<p>{user.group}</p>
				<p>{user.lastActivity}</p>
				<p>{user.birthdate}</p>
				<p>{user.verified}</p>
				<p>{user.createdAt}</p>
				<p>{user.updatedAt}</p>
			</div>
		</div>
	{/if}
	</div>
</div>

<style lang="scss">
	.r1 {
		display: flex;
		.search {
			width: 400px;
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
				width: calc(100% - 20px);
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
	.r2 {
		display: flex;
		justify-content: space-between;
		gap: 10px;
		.userProfile {
			width: 300px;
			height: 100%;
			background-color: #121212;
			border-radius: 5px;
			font-size: 10px;
			font-weight: 300;
			color: #a0a0a0;
		}
	}
	.material-symbols-outlined {
		font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 24;
		font-size: 16px;
		color: #414141;
	}
</style>
