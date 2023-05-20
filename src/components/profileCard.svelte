<script lang="ts">
	import { IconAdjustmentsAlt } from '@tabler/icons-svelte';
	
	export let name: string;
	export let role: number;

	let firstNameLetter = name[0];
	let firstSurnameLetter = name.split(' ')[1][0];
	let lettersTogether = firstNameLetter + firstSurnameLetter;
</script>

<div class="profileCard">
	<div class="picture">
		<p>{lettersTogether}</p>
		</div>
	<div class="box">
		<div class="info">
			<div class="name">{ name }</div>
			<div class="role">{ (role == 0) ? "Hráč" : (role == 1) ? "Admin" : (role == 2) ? "Super admin" : (role == 3) ? "Root" : "Neznámá role"}</div>
		</div>
			<button class="edit">
			</button>
	</div>
</div>

<style lang="scss" scoped>
	.profileCard {
		display: flex;
		padding: 10px 20px;
		width: calc(100% - 20px);
		height: 70px;
		border-radius: 10px;
        align-items: center;
		.picture {
            width: 50px;
            height: 50px;
            background-color: #F5F5F5;
            border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			p{
				color: #1C1C1C;
				font-weight: 500;
			}
		}
        .box{
            width: calc(100% - 40px);
            display: flex;
            justify-content: space-between;
            align-items: center;
		.info {
			display: flex;
			flex-direction: column;
			align-items: left;
			justify-content: center;
			margin-left: 10px;
			.name {
				font-size: 15px;
				color: #F5F5F5;
				font-weight: 300;
			}
			.role {
				font-size: 10px;
				font-weight: 500;
                color: #B7B7B7;
			}
		}
        .edit{
            background-color: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    } 
	}
</style>
