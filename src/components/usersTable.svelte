<script lang="ts">
	export let users: any[] = [];
</script>

<div class="table">
	<table>
		<thead>
			<tr>
				<th> Id </th>
				<th> Email </th>
				<th> Name </th>
				<th> Nickname </th>
				<th> Birthdate </th>
				<th> Last activity </th>
				<th data-center> Role </th>
				<th data-center> Group </th>
				<th data-center> Edit </th>
			</tr>
		</thead>
		<tbody>
			{#each users as user}
				<tr>
					<td> {user._id} </td>
					<td> {user.email} </td>
					<td> {user.name} </td>
					<td> {user.nickname} </td>
					<td> {user.birthdate} </td>
					<td> {user.lastActivity} </td>
					<td data-center> { (user.role == 0) ? "Hráč" : (user.role == 1) ? "Admin" : (user.role == 2) ? "Super admin" : (user.role == 3) ? "Root" : "Neznámá role"} </td>
					<td data-center> {user.group} </td>
					<td data-center> <a href="/profile/usersmanage/{user.id}">Edit</a> </td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style lang="scss" scoped>
	.table table {
		width: 100%;
		background-color: #121212;
		border-collapse: collapse;
		-webkit-border-horizontal-spacing: -0px;
		-webkit-border-vertical-spacing: -0px;
		border-radius: 5px;
        th{
            padding: 10px;
            color: #707070;
            font-weight: 400;
            font-size: 10px;
            text-align: left;
            background-color: #161616;
            &:nth-child(1){
                border-top-left-radius: 5px;
            }
            &:nth-child(9){
                border-top-right-radius: 5px;
            }
        }
        th[data-center]{
            text-align: center;
        }
        td[data-center]{
            text-align: center;
        }
        td{
            padding: 10px;
            color: #A0A0A0;
            font-weight: 400;
            font-size: 10px;
            text-align: left;
        }
        tr{
            &:hover{
                background-color: #1e1e1e;
            }
        }
		
	}
</style>
