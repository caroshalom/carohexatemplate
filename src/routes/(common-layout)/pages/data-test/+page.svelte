<script>
	export let data;
	console.log(data);
</script>

{#if data?.results}
	<table style="border-collapse: separate; border-spacing: 10px;">
		<thead>
			<tr>
				<th style="padding: 10px;">ID</th>
				<th style="padding: 10px;">Name</th>
				<th style="padding: 10px;">Last Name</th>
				<th style="padding: 10px;">Email</th>
			</tr>
		</thead>
		<tbody>
			{#each data.results as row}
				<tr>
					<td style="padding: 10px;">{row.idUser}</td>
					<td style="padding: 10px;">{row.Name}</td>
					<td style="padding: 10px;">{row.Lastname}</td>
					<td style="padding: 10px;">{row.email}</td>
				</tr>
			{/each}
		</tbody>
	</table>
{:else}
	<p>No data available.</p>
{/if}