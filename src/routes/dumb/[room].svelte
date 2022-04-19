<script context="module" lang="ts">
	import { supabase } from '../supabase.js';

	export async function load({ params }) {
		const room: number = params.room;
		const { data } = await supabase.from('dumbpost').select().match({ code: room });
		if (data.length === 0) {
			return {
				status: 500,
				error: new Error('Enter A Valid code')
				// redirect: '/'
			};
		} else {
			return {
				props: {
					dataGet: data
				}
			};
		}
	}
</script>

<script lang="ts">
	let left: number = 50;
	let top: number = 50;
	let position = false;
	let showData = false;
	export let dataGet;
	// console.log(data);
	const randomPercentValue = () => {
		position = true;
		left = Math.floor(Math.random() * 91);
		top = Math.floor(Math.random() * 91);
	};

	const show = async () => {
		showData = true;
		const { data, error } = await supabase
			.from('dumbpost')
			.update({ views: Number(dataGet[0]['views']) + 1 })
			.match({ code: dataGet[0]['code'] });
	};
</script>

<div class="container">
	{#if showData === false}
		<h1>Are You dumb?</h1>
		<div class="btnContainer">
			<button on:click={show} style="top:50%;">Yes</button>
			<button
				style="{position === true ? 'position:fixed;' : ''}top:{top}%;left:{left}%"
				on:click={randomPercentValue}>No</button
			>
		</div>
	{:else}
		<div class="con">
			<img style="border-radius: 20px;width:100%;" src={dataGet[0].imgurl} alt={dataGet[0].id} />
			<code>{dataGet[0].message}</code>
		</div>
	{/if}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
		justify-content: center;
		/* height: 940px; */
	}
	.con {
		background: pink;
		padding: 50px;
		border-radius: 20px;
		top: 10%;
		display: flex;
		position: absolute;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	code {
		font-family: monospace;
		/* position: absolute; */
		/* top: 40%; */
		background: #fff;
		/* padding-left: 20px; */
		/* padding-right: 10px; */
		padding: 10px;
		border-radius: 10px;
		font-weight: 1000;
		font-size: 35px;
		width: 100%;
		margin: 10px;
		text-align: center;
	}
	button {
		width: 130px;
		height: 40px;
		background: #fff;
		border: 1px solid pink;
		border-radius: 7px;
		font-family: monospace;
		font-weight: 1000;
		/* position: absolute; */
		font-size: 20px;
	}
	.btnContainer {
		position: absolute;
		top: 50%;
	}
	button:hover {
		background: pink;
		cursor: pointer;
	}
	h1 {
		font-family: monospace;
		position: absolute;
		top: 43%;
		/* left: 50%; */
		text-align: center;
	}
</style>
