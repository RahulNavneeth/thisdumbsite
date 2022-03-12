<script context="module">
	export async function load({ status, error }) {
		return {
			props: {
				status,
				error
			}
		};
	}
</script>

<script>
	export let error;
	export let status;
	// export let params;
</script>

<div class="container">
	<div class="innerCon">
		<!-- <h1><div class="innerErr">{params.room}</div></h1> -->

		<h2>
			<div class="innerErr">{status}</div>
			:
			<div class="innerErr">{error.message}</div>
		</h2>
		<a href="/"><code style="margin: 10px;">Home</code></a>
	</div>
</div>

<style>
	.innerCon {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
		position: absolute;
		top: 40%;
	}
	/* h1 { */
	/* font-family: monospace; */
	/* position: absolute; */
	/* top: 40%; */
	/* background: rgb(231, 52, 52); */
	/* color: #000; */
	/* padding-left: 20px; */
	/* padding-right: 10px; */
	/* padding: 10px; */
	/* border-radius: 6px; */
	/* margin: 0px; */
	/* } */
	h2 {
		font-family: monospace;
		/* position: absolute; */
		/* top: 40%; */
		/* left: 50%; */
		padding: 10px;
		width: 25%;
		background-color: rgb(231, 52, 52);
		border-radius: 10px;
		text-align: center;
		display: flex;
		justify-content: center;
		align-content: center;
		align-items: center;
	}
	a {
		text-decoration: none;
		color: black;
	}
	code {
		font-family: monospace;
		/* position: absolute; */
		/* top: 50%; */
		background: pink;
		/* padding-left: 20px; */
		/* padding-right: 10px; */
		padding: 10px;
		border-radius: 6px;
		font-weight: 1000;
		font-size: 35px;
	}
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
		justify-content: center;
		/* height: 940px; */
	}
	.innerErr {
		padding: 10px;
		background-color: #fff;
		border-radius: 10px;
	}
</style>
